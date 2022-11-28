from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSpotsetsResponse:
    content_type: str = field()
    status_code: int = field()
    spot_set: Optional[shared.SpotSet] = field(default=None)
    
