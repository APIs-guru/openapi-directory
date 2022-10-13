from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tensorflowversion


@dataclass_json
@dataclass
class ListTensorFlowVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tensorflow_versions: Optional[List[tensorflowversion.TensorFlowVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tensorflowVersions' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
