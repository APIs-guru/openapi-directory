from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Abschlussbelegdaten:
    abschluss_beginn_datum_uhrzeit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Abschluss-Beginn-Datum-Uhrzeit' }})
    abschluss_ende_datum_uhrzeit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Abschluss-Ende-Datum-Uhrzeit' }})
    
