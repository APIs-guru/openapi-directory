from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import truncatablestring
from . import truncatablestring


@dataclass_json
@dataclass
class Module:
    build_id: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildId' }})
    module: Optional[truncatablestring.TruncatableString] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'module' }})
    
