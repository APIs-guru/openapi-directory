from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Zahlung:
    betrag: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Betrag' }})
    bezeichnung: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bezeichnung' }})
    referenz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Referenz' }})
    
