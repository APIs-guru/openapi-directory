from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import range
from . import sectionstyle


@dataclass_json
@dataclass
class UpdateSectionStyleRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    section_style: Optional[sectionstyle.SectionStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionStyle' }})
    
