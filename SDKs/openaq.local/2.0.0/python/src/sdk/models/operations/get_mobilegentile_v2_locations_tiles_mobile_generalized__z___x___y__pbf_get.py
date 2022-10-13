from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams:
    x: int = field(default=None, metadata={'path_param': { 'field_name': 'x', 'style': 'simple', 'explode': False }})
    y: int = field(default=None, metadata={'path_param': { 'field_name': 'y', 'style': 'simple', 'explode': False }})
    z: int = field(default=None, metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams:
    is_analysis: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    last_updated_from: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedFrom', 'style': 'form', 'explode': True }})
    last_updated_to: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedTo', 'style': 'form', 'explode': True }})
    location: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    parameter: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    project: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest:
    path_params: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams = field(default=None)
    query_params: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams = field(default=None)
    

@dataclass
class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
