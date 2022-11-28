from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ErrorSlowDown:
    error: Optional[str] = field(default=None)
    
