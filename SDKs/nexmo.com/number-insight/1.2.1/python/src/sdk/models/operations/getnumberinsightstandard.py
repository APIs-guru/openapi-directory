from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetNumberInsightStandardPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberInsightStandardQueryParams:
    number: str = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    cnam: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'cnam', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumberInsightStandardRequest:
    path_params: GetNumberInsightStandardPathParams = field()
    query_params: GetNumberInsightStandardQueryParams = field()
    

@dataclass
class GetNumberInsightStandardResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_number_insight_standard_200_application_json_one_of: Optional[Any] = field(default=None)
    
