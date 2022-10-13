from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trust


@dataclass_json
@dataclass
class ValidateTrustRequest:
    trust: Optional[trust.Trust] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust' }})
    
