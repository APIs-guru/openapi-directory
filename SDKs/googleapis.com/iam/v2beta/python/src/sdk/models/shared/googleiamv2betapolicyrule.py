from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleiamv2betadenyrule


@dataclass_json
@dataclass
class GoogleIamV2betaPolicyRule:
    deny_rule: Optional[googleiamv2betadenyrule.GoogleIamV2betaDenyRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denyRule' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
