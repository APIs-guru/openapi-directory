from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SQLServerDatabaseDetails:
    compatibility_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibilityLevel' }})
    recovery_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recoveryModel' }})
    
