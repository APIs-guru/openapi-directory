from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VerifyControlPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyControlRequest:
    path_params: VerifyControlPathParams = field()
    request: shared.ControlRequest = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyControlResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    verify_control_200_application_json_one_of: Optional[Any] = field(default=None)
    
