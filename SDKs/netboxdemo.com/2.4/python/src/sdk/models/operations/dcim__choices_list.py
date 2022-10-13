from dataclasses import dataclass, field
from typing import List


@dataclass
class DcimChoicesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
