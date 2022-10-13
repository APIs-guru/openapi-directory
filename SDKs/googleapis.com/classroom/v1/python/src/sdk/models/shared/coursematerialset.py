from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import coursematerial


@dataclass_json
@dataclass
class CourseMaterialSet:
    materials: Optional[List[coursematerial.CourseMaterial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
