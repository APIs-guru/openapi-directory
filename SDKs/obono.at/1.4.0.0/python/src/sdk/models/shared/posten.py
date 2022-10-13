from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PostenSatzEnum(str, Enum):
    NORMAL = "NORMAL"
    ERMAESSIGT1 = "ERMAESSIGT1"
    ERMAESSIGT2 = "ERMAESSIGT2"
    BESONDERS = "BESONDERS"
    NULL = "NULL"


@dataclass_json
@dataclass
class Posten:
    bezeichnung: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bezeichnung' }})
    brutto_betrag: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BruttoBetrag' }})
    externer_beleg_belegkreis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Externer-Beleg-Belegkreis' }})
    externer_beleg_bezeichnung: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Externer-Beleg-Bezeichnung' }})
    externer_beleg_referenz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Externer-Beleg-Referenz' }})
    menge: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Menge' }})
    netto_betrag: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NettoBetrag' }})
    satz: PostenSatzEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Satz' }})
    
