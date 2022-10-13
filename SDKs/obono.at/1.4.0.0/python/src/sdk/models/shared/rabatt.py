from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RabattSatzEnum(str, Enum):
    NORMAL = "NORMAL"
    ERMAESSIGT1 = "ERMAESSIGT1"
    ERMAESSIGT2 = "ERMAESSIGT2"
    BESONDERS = "BESONDERS"
    NULL = "NULL"


@dataclass_json
@dataclass
class Rabatt:
    betrag_brutto: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Betrag-Brutto' }})
    betrag_netto: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Betrag-Netto' }})
    bezeichnung: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Bezeichnung' }})
    satz: Optional[RabattSatzEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Satz' }})
    
