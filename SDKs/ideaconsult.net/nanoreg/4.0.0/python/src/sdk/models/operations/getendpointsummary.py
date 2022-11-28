from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEndpointSummaryPathParams:
    db: shared.AmbitDatabaseIDEnum = field(metadata={'path_param': { 'field_name': 'db', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetEndpointSummaryPathParams = field()
    query_params: GetEndpointSummaryQueryParams = field()
    

@dataclass
class GetEndpointSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    facet: Optional[shared.Facet] = field(default=None)
    
