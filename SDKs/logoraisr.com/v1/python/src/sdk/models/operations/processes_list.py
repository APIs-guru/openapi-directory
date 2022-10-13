from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ProcessesListResponse:
    content_type: str = field(default=None)
    process: Optional[shared.Process] = field(default=None)
    status_code: int = field(default=None)
    
