from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLogFileQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLogFileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLogFileRequest:
    query_params: GetLogFileQueryParams = field(default=None)
    security: GetLogFileSecurity = field(default=None)
    

@dataclass
class GetLogFileResponse:
    content_type: str = field(default=None)
    get_log_file_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
