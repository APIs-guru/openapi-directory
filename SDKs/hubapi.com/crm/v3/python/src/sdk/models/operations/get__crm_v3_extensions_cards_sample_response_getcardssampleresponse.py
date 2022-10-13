from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCrmV3ExtensionsCardsSampleResponseGetCardsSampleResponseResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    integrator_card_payload_response: Optional[shared.IntegratorCardPayloadResponse] = field(default=None)
    status_code: int = field(default=None)
    
