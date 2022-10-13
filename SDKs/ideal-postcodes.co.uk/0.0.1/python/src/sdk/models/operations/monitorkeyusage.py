from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MonitorKeyUsagePathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class MonitorKeyUsageQueryParams:
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class MonitorKeyUsageSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class MonitorKeyUsageRequest:
    path_params: MonitorKeyUsagePathParams = field(default=None)
    query_params: MonitorKeyUsageQueryParams = field(default=None)
    security: MonitorKeyUsageSecurity = field(default=None)
    

@dataclass
class MonitorKeyUsageResponse:
    content_type: str = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    key_usage_response_schema: Optional[shared.KeyUsageResponseSchema] = field(default=None)
    status_code: int = field(default=None)
    
