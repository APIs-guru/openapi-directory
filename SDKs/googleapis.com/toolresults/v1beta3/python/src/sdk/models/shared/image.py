from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import status
from . import tooloutputreference
from . import thumbnail


@dataclass_json
@dataclass
class Image:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    source_image: Optional[tooloutputreference.ToolOutputReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceImage' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    thumbnail: Optional[thumbnail.Thumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    
