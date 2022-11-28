from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ErrorDetail:
    message: str = field()
    code: Optional[str] = field(default=None)
    context: Optional[dict[str, List[str]]] = field(default=None)
    in_: Optional[str] = field(default=None)
    sub_category: Optional[str] = field(default=None)
    
