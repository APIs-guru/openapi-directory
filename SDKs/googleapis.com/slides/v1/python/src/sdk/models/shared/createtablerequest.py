from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pageelementproperties


@dataclass_json
@dataclass
class CreateTableRequest:
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    element_properties: Optional[pageelementproperties.PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elementProperties' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
