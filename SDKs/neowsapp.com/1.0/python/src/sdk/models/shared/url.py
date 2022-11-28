from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class URL:
    authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authority') }})
    content: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    default_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPort') }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    user_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userInfo') }})
    
