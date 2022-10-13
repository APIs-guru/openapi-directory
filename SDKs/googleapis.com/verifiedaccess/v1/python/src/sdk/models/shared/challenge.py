from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import signeddata
from . import signeddata


@dataclass_json
@dataclass
class Challenge:
    alternative_challenge: Optional[signeddata.SignedData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeChallenge' }})
    challenge: Optional[signeddata.SignedData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    
