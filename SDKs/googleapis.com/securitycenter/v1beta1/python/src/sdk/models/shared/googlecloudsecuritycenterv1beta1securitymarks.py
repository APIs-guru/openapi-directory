from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1beta1SecurityMarks:
    marks: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marks' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
