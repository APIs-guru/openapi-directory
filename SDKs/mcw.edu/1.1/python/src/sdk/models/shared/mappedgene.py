from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class MappedGene:
    chromosome: Optional[str] = field(default=None)
    gene: Optional[Gene] = field(default=None)
    map_key: Optional[int] = field(default=None)
    start: Optional[int] = field(default=None)
    stop: Optional[int] = field(default=None)
    strand: Optional[str] = field(default=None)
    
