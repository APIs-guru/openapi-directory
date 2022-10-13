from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetEndpointSummaryPathParams:
    db: shared.AmbitDatabaseIDEnum = field(default=None, metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
class GetEndpointSummaryTopEnum(str, Enum):
    P_CHEM = "P-CHEM"
    ECOTOX = "ECOTOX"
    ENV_FATE = "ENV FATE"
    TOX = "TOX"
    EXPOSURE = "EXPOSURE"


@dataclass
class GetEndpointSummaryQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    top: Optional[GetEndpointSummaryTopEnum] = field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEndpointSummaryRequest:
    path_params: GetEndpointSummaryPathParams = field(default=None)
    query_params: GetEndpointSummaryQueryParams = field(default=None)
    

@dataclass
class GetEndpointSummaryResponse:
    content_type: str = field(default=None)
    facet: Optional[shared.Facet] = field(default=None)
    status_code: int = field(default=None)
    
