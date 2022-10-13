from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pathfilter
from . import pathfilter


@dataclass_json
@dataclass
class CloneVersionRequest:
    exclude: Optional[pathfilter.PathFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclude' }})
    finalize: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalize' }})
    include: Optional[pathfilter.PathFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    source_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVersion' }})
    
