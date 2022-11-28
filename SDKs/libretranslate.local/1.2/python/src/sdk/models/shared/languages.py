from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Languages:
    code: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
