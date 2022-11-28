from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvailableServicesResponse:
    content_type: str = field()
    status_code: int = field()
    api_services_out: Optional[shared.APIServicesOut] = field(default=None)
    
