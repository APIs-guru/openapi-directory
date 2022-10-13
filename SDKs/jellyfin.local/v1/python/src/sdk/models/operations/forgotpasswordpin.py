from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ForgotPasswordPinRequests:
    string: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    string1: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string2: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ForgotPasswordPinRequest:
    request: Optional[ForgotPasswordPinRequests] = field(default=None)
    

@dataclass
class ForgotPasswordPinResponse:
    content_type: str = field(default=None)
    pin_redeem_result: Optional[shared.PinRedeemResult] = field(default=None)
    status_code: int = field(default=None)
    
