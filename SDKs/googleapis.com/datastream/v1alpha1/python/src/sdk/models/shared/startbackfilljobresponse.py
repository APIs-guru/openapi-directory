from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamobject


@dataclass_json
@dataclass
class StartBackfillJobResponse:
    object: Optional[streamobject.StreamObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    
