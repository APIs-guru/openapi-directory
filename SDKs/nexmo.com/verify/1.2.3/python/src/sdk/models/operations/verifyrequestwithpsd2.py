from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VerifyRequestWithPsd2PathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyRequestWithPsd2Request:
    path_params: VerifyRequestWithPsd2PathParams = field()
    request: shared.Psd2Request = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyRequestWithPsd2Response:
    content_type: str = field()
    status_code: int = field()
    verify_request_with_psd2_200_application_json_one_of: Optional[Any] = field(default=None)
    
