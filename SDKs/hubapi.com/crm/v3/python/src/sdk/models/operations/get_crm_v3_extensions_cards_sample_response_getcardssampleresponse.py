from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    integrator_card_payload_response: Optional[shared.IntegratorCardPayloadResponse] = field(default=None)
    
