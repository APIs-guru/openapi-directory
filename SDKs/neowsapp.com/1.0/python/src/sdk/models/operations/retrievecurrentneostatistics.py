from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCurrentNeoStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    statistics: Optional[shared.Statistics] = field(default=None)
    
