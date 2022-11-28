from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAllStrainsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
