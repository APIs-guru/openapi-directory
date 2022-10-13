from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvailableServicesResponse:
    api_services_out: Optional[shared.APIServicesOut] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
