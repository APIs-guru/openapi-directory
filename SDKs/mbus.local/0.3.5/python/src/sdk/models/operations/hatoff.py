from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HatOffResponse:
    content_type: str = field()
    status_code: int = field()
    text_error: Optional[str] = field(default=None)
    
