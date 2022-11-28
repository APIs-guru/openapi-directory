from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSubstanceStructuresPathParams:
    db: shared.AmbitDatabaseIDEnum = field(metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceStructuresQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceStructuresRequest:
    path_params: GetSubstanceStructuresPathParams = field()
    query_params: GetSubstanceStructuresQueryParams = field()
    

@dataclass
class GetSubstanceStructuresResponse:
    content_type: str = field()
    status_code: int = field()
    dataset: Optional[shared.Dataset] = field(default=None)
    
