from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gcrule


@dataclass_json
@dataclass
class Intersection:
    rules: Optional[List[gcrule.GcRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
