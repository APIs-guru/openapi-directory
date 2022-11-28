from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Abschlussbelegdaten:
    abschluss_beginn_datum_uhrzeit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abschluss-Beginn-Datum-Uhrzeit') }})
    abschluss_ende_datum_uhrzeit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Abschluss-Ende-Datum-Uhrzeit') }})
    
