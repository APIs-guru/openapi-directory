from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class VerifyRequestPathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyRequestRequest:
    path_params: VerifyRequestPathParams = field(default=None)
    request: shared.VerifyRequest = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyRequestResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_request_200_application_json_one_of: Optional[Any] = field(default=None)
    
