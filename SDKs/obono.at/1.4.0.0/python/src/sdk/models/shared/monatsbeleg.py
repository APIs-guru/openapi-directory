from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Monatsbeleg:
    beleg_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Beleg-UUID' }})
    fon_geprueft_datum_uhrzeit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FON-Geprueft-Datum-Uhrzeit' }})
    fon_geprueft_erfolgreich: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FON-Geprueft-Erfolgreich' }})
    jahr: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Jahr' }})
    monat: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Monat' }})
    
