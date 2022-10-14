from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MbusAPIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    text_error: Optional[str] = field(default=None)
    yaml: Optional[str] = field(default=None)
    
