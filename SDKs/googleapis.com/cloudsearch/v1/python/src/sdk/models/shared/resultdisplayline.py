from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resultdisplayfield


@dataclass_json
@dataclass
class ResultDisplayLine:
    fields: Optional[List[resultdisplayfield.ResultDisplayField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
