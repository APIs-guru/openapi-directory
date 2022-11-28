from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MappedGenePosition:
    chromosome: Optional[str] = field(default=None)
    map_key: Optional[int] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    start: Optional[int] = field(default=None)
    stop: Optional[int] = field(default=None)
    strand: Optional[str] = field(default=None)
    symbol: Optional[str] = field(default=None)
    
