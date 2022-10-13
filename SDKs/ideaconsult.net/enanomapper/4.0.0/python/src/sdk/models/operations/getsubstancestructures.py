from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstanceStructuresPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceStructuresQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceStructuresRequest:
    path_params: GetSubstanceStructuresPathParams = field(default=None)
    query_params: GetSubstanceStructuresQueryParams = field(default=None)
    

@dataclass
class GetSubstanceStructuresResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
