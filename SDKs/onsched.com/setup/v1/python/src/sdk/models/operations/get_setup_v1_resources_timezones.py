from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesTimezonesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_timezone_view_model: Optional[shared.SystemTimezoneViewModel] = field(default=None)
    
