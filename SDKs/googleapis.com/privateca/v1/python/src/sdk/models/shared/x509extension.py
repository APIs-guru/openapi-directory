from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import objectid


@dataclass_json
@dataclass
class X509Extension:
    critical: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critical' }})
    object_id: Optional[objectid.ObjectID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
