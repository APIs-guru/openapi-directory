from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sheetproperties


@dataclass_json
@dataclass
class UpdateSheetPropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    properties: Optional[sheetproperties.SheetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
