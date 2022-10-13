from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import date


@dataclass_json
@dataclass
class InventoryWindowsApplication:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    display_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVersion' }})
    help_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpLink' }})
    install_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installDate' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    
