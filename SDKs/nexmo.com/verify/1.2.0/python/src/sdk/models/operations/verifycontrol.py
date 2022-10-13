from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class VerifyControlPathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyControlRequest:
    path_params: VerifyControlPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyControlResponses:
    raw_response: bytes = field(default=None)
    verify_control_200_application_json_one_of: Optional[Any] = field(default=None)
    

@dataclass
class VerifyControlResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, VerifyControlResponses]] = field(default=None)
    status_code: int = field(default=None)
    
