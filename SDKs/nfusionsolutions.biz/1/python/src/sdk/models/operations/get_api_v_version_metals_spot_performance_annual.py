from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSpotPerformanceAnnualPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSpotPerformanceAnnualQueryParams:
    metals: str = field(metadata={'query_param': { 'field_name': 'metals', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    unitofmeasure: Optional[shared.UnitOfMeasureEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unitofmeasure', 'style': 'form', 'explode': True }})
    years: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'years', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSpotPerformanceAnnualRequest:
    path_params: GetAPIVVersionMetalsSpotPerformanceAnnualPathParams = field()
    query_params: GetAPIVVersionMetalsSpotPerformanceAnnualQueryParams = field()
    

@dataclass
class GetAPIVVersionMetalsSpotPerformanceAnnualResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    interval_collection_responses: Optional[List[shared.IntervalCollectionResponse]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
