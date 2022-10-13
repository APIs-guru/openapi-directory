from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import backfilljob
from . import error
from . import sourceobjectidentifier


@dataclass_json
@dataclass
class StreamObject:
    backfill_job: Optional[backfilljob.BackfillJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backfillJob' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source_object: Optional[sourceobjectidentifier.SourceObjectIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceObject' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
