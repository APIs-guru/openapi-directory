from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLogFileQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLogFileSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetLogFileRequest:
    query_params: GetLogFileQueryParams = field()
    security: GetLogFileSecurity = field()
    

@dataclass
class GetLogFileResponse:
    content_type: str = field()
    status_code: int = field()
    get_log_file_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    
