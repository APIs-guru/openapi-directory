from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Detections:
    confidence: Optional[float] = field(default=None)
    language: Optional[str] = field(default=None)
    
