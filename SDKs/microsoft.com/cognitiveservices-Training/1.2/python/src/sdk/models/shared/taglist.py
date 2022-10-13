from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class TagList:
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    total_tagged_images: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalTaggedImages' }})
    total_untagged_images: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalUntaggedImages' }})
    
