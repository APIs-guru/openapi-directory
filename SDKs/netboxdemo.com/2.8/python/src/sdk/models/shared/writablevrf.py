from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableVrfInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enforce_unique: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforce_unique') }})
    rd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rd') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
