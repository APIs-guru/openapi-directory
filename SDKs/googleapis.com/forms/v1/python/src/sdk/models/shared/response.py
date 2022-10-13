from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import createitemresponse


@dataclass_json
@dataclass
class Response:
    create_item: Optional[createitemresponse.CreateItemResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createItem' }})
    
