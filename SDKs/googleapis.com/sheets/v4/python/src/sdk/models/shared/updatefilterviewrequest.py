from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filterview


@dataclass_json
@dataclass
class UpdateFilterViewRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    filter: Optional[filterview.FilterView] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    
