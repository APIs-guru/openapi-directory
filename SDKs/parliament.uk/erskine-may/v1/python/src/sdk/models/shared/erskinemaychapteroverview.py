from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import erskinemaysectionoverview


@dataclass_json
@dataclass
class ErskineMayChapterOverview:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    part_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partNumber' }})
    sections: Optional[List[erskinemaysectionoverview.ErskineMaySectionOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
