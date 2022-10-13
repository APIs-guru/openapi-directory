from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Verify:
    has_pending_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasPendingVerification' }})
    
