from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import copy


@dataclass_json
@dataclass
class Create:
    copy: Optional[copy.Copy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copy' }})
    new: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    upload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    
