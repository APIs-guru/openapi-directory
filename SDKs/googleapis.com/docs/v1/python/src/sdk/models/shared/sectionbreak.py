from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sectionstyle


@dataclass_json
@dataclass
class SectionBreak:
    section_style: Optional[sectionstyle.SectionStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionStyle' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionIds' }})
    
