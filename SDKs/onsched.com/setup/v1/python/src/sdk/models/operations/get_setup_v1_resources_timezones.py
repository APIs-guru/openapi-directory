from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcesTimezonesResponse:
    content_type: str = field()
    status_code: int = field()
    system_timezone_view_model: Optional[shared.SystemTimezoneViewModel] = field(default=None)
    
