from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BelegdatenUnternehmenIDTypEnum(str, Enum):
    STEUERNUMMER = "steuernummer"
    UID = "uid"
    GLN = "gln"


@dataclass_json
@dataclass
class Belegdaten:
    r"""Belegdaten
    The `Beleg` to be signed by the \"Signaturerstellungseinheit\" and stored in the \"Datenerfassungsprotokoll\".
    """
    
    externer_beleg_belegkreis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Belegkreis') }})
    externer_beleg_bezeichnung: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Bezeichnung') }})
    externer_beleg_referenz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Referenz') }})
    kunde: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Kunde') }})
    notizen: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notizen') }})
    posten: Optional[List[Posten]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Posten') }})
    rabatte: Optional[List[Rabatt]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rabatte') }})
    storno: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno') }})
    storno_beleg_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno-Beleg-UUID') }})
    storno_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno-Text') }})
    training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Training') }})
    unternehmen_adresse1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Adresse1') }})
    unternehmen_adresse2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Adresse2') }})
    unternehmen_fusszeile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Fusszeile') }})
    unternehmen_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-ID') }})
    unternehmen_id_typ: Optional[BelegdatenUnternehmenIDTypEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-ID-Typ') }})
    unternehmen_kopfzeile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Kopfzeile') }})
    unternehmen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Name') }})
    unternehmen_ort: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Ort') }})
    unternehmen_plz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-PLZ') }})
    zahlungen: Optional[List[Zahlung]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zahlungen') }})
    
