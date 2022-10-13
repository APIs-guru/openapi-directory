from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest:
    artifact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifact' }})
    assertion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assertion' }})
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    
