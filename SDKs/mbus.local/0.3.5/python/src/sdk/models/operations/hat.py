from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class HatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    hat: Optional[Any] = field(default=None)
    text_error: Optional[str] = field(default=None)
    
