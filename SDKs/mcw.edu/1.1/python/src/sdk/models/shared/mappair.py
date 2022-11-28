from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MapPair:
    key_value: Optional[str] = field(default=None)
    string_value: Optional[str] = field(default=None)
    
