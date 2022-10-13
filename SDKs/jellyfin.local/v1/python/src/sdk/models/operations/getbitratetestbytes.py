from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBitrateTestBytesQueryParams:
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBitrateTestBytesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBitrateTestBytesRequest:
    query_params: GetBitrateTestBytesQueryParams = field(default=None)
    security: GetBitrateTestBytesSecurity = field(default=None)
    

@dataclass
class GetBitrateTestBytesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_bitrate_test_bytes_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
