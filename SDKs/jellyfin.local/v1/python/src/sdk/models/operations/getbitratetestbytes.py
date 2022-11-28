from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetBitrateTestBytesQueryParams:
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBitrateTestBytesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBitrateTestBytesRequest:
    query_params: GetBitrateTestBytesQueryParams = field()
    security: GetBitrateTestBytesSecurity = field()
    

@dataclass
class GetBitrateTestBytesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_bitrate_test_bytes_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
