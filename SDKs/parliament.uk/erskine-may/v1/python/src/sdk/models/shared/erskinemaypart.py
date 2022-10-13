from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import erskinemaychapteroverview


@dataclass_json
@dataclass
class ErskineMayPart:
    chapters: Optional[List[erskinemaychapteroverview.ErskineMayChapterOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chapters' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
