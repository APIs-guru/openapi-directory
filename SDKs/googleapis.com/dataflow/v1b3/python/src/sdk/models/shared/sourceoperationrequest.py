from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcegetmetadatarequest
from . import sourcesplitrequest


@dataclass_json
@dataclass
class SourceOperationRequest:
    get_metadata: Optional[sourcegetmetadatarequest.SourceGetMetadataRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getMetadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalName' }})
    split: Optional[sourcesplitrequest.SourceSplitRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'split' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    system_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemName' }})
    
