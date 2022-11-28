from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VerifyCheckPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifyCheckRequest:
    path_params: VerifyCheckPathParams = field()
    request: shared.CheckRequest = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class VerifyCheckResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    verify_check_200_application_json_one_of: Optional[Any] = field(default=None)
    
