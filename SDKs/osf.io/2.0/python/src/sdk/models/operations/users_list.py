from dataclasses import dataclass, field
from typing import List


@dataclass
class UsersListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
