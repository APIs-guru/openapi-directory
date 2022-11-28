from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class Translate:
    translated_text: Optional[Any] = field(default=None)
    
