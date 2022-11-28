from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HatResponse:
    content_type: str = field()
    status_code: int = field()
    hat: Optional[Any] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
