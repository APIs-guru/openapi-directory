from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firstlastnamediasporaedout
from . import firstlastnamegenderedout
from . import firstlastnameoriginedout


@dataclass_json
@dataclass
class CorridorOut:
    first_last_name_diasporaed_out: Optional[firstlastnamediasporaedout.FirstLastNameDiasporaedOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstLastNameDiasporaedOut' }})
    first_last_name_gendered_out: Optional[firstlastnamegenderedout.FirstLastNameGenderedOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstLastNameGenderedOut' }})
    first_last_name_origined_out: Optional[firstlastnameoriginedout.FirstLastNameOriginedOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstLastNameOriginedOut' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    
