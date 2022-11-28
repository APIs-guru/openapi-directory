from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RabattSatzEnum(str, Enum):
    NORMAL = "NORMAL"
    ERMAESSIGT1 = "ERMAESSIGT1"
    ERMAESSIGT2 = "ERMAESSIGT2"
    BESONDERS = "BESONDERS"
    NULL = "NULL"


@dataclass_json
@dataclass
class Rabatt:
    betrag_brutto: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Brutto') }})
    betrag_netto: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Netto') }})
    bezeichnung: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bezeichnung') }})
    satz: Optional[RabattSatzEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Satz') }})
    
