from dataclasses import dataclass, field
from typing import Any


@dataclass
class DeleteAnythingResponse:
    content_type: str = field()
    status_code: int = field()
    
