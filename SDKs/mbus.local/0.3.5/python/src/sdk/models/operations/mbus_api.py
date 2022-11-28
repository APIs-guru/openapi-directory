from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MbusAPIResponse:
    content_type: str = field()
    status_code: int = field()
    text_error: Optional[str] = field(default=None)
    yaml: Optional[str] = field(default=None)
    
