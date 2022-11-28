from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams:
    x: int = field(metadata={'path_param': { 'field_name': 'x', 'style': 'simple', 'explode': False }})
    y: int = field(metadata={'path_param': { 'field_name': 'y', 'style': 'simple', 'explode': False }})
    z: int = field(metadata={'path_param': { 'field_name': 'z', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams:
    date_from: Any = field(metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Any = field(metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    is_analysis: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isAnalysis', 'style': 'form', 'explode': True }})
    is_mobile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMobile', 'style': 'form', 'explode': True }})
    last_updated_from: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedFrom', 'style': 'form', 'explode': True }})
    last_updated_to: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'lastUpdatedTo', 'style': 'form', 'explode': True }})
    location: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'location', 'style': 'form', 'explode': True }})
    parameter: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'parameter', 'style': 'form', 'explode': True }})
    project: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest:
    path_params: GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams = field()
    query_params: GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams = field()
    

@dataclass
class GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
