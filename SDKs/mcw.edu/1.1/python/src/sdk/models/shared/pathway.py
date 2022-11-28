from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Pathway:
    description: Optional[str] = field(default=None)
    has_altered_path: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    object_list: Optional[List[PathwayObject]] = field(default=None)
    pathway_categories: Optional[List[str]] = field(default=None)
    reference_list: Optional[List[Reference]] = field(default=None)
    
