from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class MappedQtl:
    chromosome: Optional[str] = field(default=None)
    map_key: Optional[int] = field(default=None)
    qtl: Optional[Qtl] = field(default=None)
    start: Optional[int] = field(default=None)
    stop: Optional[int] = field(default=None)
    strand: Optional[str] = field(default=None)
    
