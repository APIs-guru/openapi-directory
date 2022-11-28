from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Zahlung:
    betrag: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag') }})
    bezeichnung: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bezeichnung') }})
    referenz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Referenz') }})
    
