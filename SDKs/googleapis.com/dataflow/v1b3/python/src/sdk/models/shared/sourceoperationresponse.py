from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourcegetmetadataresponse
from . import sourcesplitresponse


@dataclass_json
@dataclass
class SourceOperationResponse:
    get_metadata: Optional[sourcegetmetadataresponse.SourceGetMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'getMetadata' }})
    split: Optional[sourcesplitresponse.SourceSplitResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'split' }})
    
