from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Permission:
    claims: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claims') }})
    rsid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsid') }})
    rsname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rsname') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
