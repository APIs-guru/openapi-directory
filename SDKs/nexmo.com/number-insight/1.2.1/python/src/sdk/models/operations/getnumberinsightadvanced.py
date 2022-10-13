from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetNumberInsightAdvancedPathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberInsightAdvancedQueryParams:
    cnam: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cnam', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    number: str = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    real_time_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'real_time_data', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumberInsightAdvancedRequest:
    path_params: GetNumberInsightAdvancedPathParams = field(default=None)
    query_params: GetNumberInsightAdvancedQueryParams = field(default=None)
    

@dataclass
class GetNumberInsightAdvancedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_number_insight_advanced_200_application_json_one_of: Optional[Any] = field(default=None)
    
