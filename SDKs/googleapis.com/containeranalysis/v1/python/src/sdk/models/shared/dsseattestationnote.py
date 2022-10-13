from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dssehint


@dataclass_json
@dataclass
class DsseAttestationNote:
    hint: Optional[dssehint.DsseHint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    
