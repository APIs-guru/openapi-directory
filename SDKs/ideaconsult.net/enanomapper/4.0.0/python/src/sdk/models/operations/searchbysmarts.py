from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SearchBySmartsPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
class SearchBySmartsTypeEnum(str, Enum):
    SMILES = "smiles"
    MOL = "mol"
    URL = "url"


@dataclass
class SearchBySmartsQueryParams:
    b64search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'b64search', 'style': 'form', 'explode': True }})
    bundle_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_uri', 'style': 'form', 'explode': True }})
    dataset_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset_uri', 'style': 'form', 'explode': True }})
    filter_by_substance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filterBySubstance', 'style': 'form', 'explode': True }})
    mol: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mol', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sameas: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sameas', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    type: Optional[SearchBySmartsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBySmartsRequest:
    path_params: SearchBySmartsPathParams = field(default=None)
    query_params: SearchBySmartsQueryParams = field(default=None)
    

@dataclass
class SearchBySmartsResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
