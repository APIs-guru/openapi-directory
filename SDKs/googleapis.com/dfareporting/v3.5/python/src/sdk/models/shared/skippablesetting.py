from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import videooffset
from . import videooffset


@dataclass_json
@dataclass
class SkippableSetting:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    progress_offset: Optional[videooffset.VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressOffset' }})
    skip_offset: Optional[videooffset.VideoOffset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipOffset' }})
    skippable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippable' }})
    
