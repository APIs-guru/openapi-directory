from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProcessesListResponse:
    content_type: str = field()
    status_code: int = field()
    process: Optional[shared.Process] = field(default=None)
    
