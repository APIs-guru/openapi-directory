from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSubstanceCompositionPathParams:
    db: shared.AmbitDatabaseIDEnum = field(metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceCompositionQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceCompositionRequest:
    path_params: GetSubstanceCompositionPathParams = field()
    query_params: GetSubstanceCompositionQueryParams = field()
    

@dataclass
class GetSubstanceCompositionResponse:
    content_type: str = field()
    status_code: int = field()
    substance_composition: Optional[shared.SubstanceComposition] = field(default=None)
    
