from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attestationauthorityhint


@dataclass_json
@dataclass
class AttestationAuthority:
    hint: Optional[attestationauthorityhint.AttestationAuthorityHint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    
