from dataclasses import dataclass, field
from typing import Any


@dataclass
class PatchAnythingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
