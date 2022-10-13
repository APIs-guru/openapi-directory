from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class VerifyRequestWithPsd2PathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyRequestWithPsd2Request:
    path_params: VerifyRequestWithPsd2PathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyRequestWithPsd2Responses:
    verify_request_with_psd2_200_application_json_one_of: Optional[Any] = field(default=None)
    

@dataclass
class VerifyRequestWithPsd2Response:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, VerifyRequestWithPsd2Responses]] = field(default=None)
    status_code: int = field(default=None)
    
