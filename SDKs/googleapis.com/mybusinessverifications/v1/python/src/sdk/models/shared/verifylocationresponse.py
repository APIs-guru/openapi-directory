from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import verification


@dataclass_json
@dataclass
class VerifyLocationResponse:
    verification: Optional[verification.Verification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    
