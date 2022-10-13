from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import sasportalstatus


@dataclass_json
@dataclass
class SasPortalOperation:
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    error: Optional[sasportalstatus.SasPortalStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    response: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    
