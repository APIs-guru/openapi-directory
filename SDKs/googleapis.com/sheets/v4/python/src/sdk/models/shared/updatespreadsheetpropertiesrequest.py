from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import spreadsheetproperties


@dataclass_json
@dataclass
class UpdateSpreadsheetPropertiesRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    properties: Optional[spreadsheetproperties.SpreadsheetProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
