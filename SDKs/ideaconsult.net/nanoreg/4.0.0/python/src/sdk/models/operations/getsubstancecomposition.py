from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSubstanceCompositionPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubstanceCompositionQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubstanceCompositionRequest:
    path_params: GetSubstanceCompositionPathParams = field(default=None)
    query_params: GetSubstanceCompositionQueryParams = field(default=None)
    

@dataclass
class GetSubstanceCompositionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    substance_composition: Optional[shared.SubstanceComposition] = field(default=None)
    
