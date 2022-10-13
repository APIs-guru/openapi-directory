from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceSettingsInputModel:
    book_ahead_unit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookAheadUnit' }})
    book_ahead_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookAheadValue' }})
    book_in_advance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookInAdvance' }})
    
