from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Error:
    category: str = field()
    correlation_id: str = field()
    message: str = field()
    context: Optional[dict[str, List[str]]] = field(default=None)
    errors: Optional[List[ErrorDetail]] = field(default=None)
    links: Optional[dict[str, str]] = field(default=None)
    sub_category: Optional[str] = field(default=None)
    
