from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BelegBelegTypenEnum(str, Enum):
    BELEGKREISINITIALISIERUNG = "Belegkreisinitialisierung"
    KASSENBERICHT = "Kassenbericht"
    MONATSABSCHLUSS = "Monatsabschluss"
    STARTBELEG = "Startbeleg"
    STORNO = "Storno"
    SYSTEMBELEG = "Systembeleg"
    TRAINING = "Training"


@dataclass_json
@dataclass
class Beleg:
    beleg_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beleg-Codes') }})
    beleg_typen: Optional[List[BelegBelegTypenEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beleg-Typen') }})
    belegdaten: Optional[SignierteBelegdaten] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belegdaten') }})
    jws: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JWS') }})
    qr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QR') }})
    qr_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QR-Link') }})
    registrierkasse_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Registrierkasse-UUID') }})
    signaturerstellungseinheit_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Signaturerstellungseinheit-UUID') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_href') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_uuid') }})
    
