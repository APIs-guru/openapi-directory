from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SearchBySimilarityPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
class SearchBySimilarityTypeEnum(str, Enum):
    SMILES = "smiles"
    MOL = "mol"
    URL = "url"


@dataclass
class SearchBySimilarityQueryParams:
    b64search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'b64search', 'style': 'form', 'explode': True }})
    bundle_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bundle_uri', 'style': 'form', 'explode': True }})
    dataset_uri: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dataset_uri', 'style': 'form', 'explode': True }})
    filter_by_substance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'filterBySubstance', 'style': 'form', 'explode': True }})
    mol: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'mol', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    sameas: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sameas', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    threshold: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    type: Optional[SearchBySimilarityTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBySimilarityRequest:
    path_params: SearchBySimilarityPathParams = field(default=None)
    query_params: SearchBySimilarityQueryParams = field(default=None)
    

@dataclass
class SearchBySimilarityResponse:
    content_type: str = field(default=None)
    dataset: Optional[shared.Dataset] = field(default=None)
    status_code: int = field(default=None)
    
