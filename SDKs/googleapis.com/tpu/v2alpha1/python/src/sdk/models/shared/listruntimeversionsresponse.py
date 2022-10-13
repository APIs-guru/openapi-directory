from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtimeversion


@dataclass_json
@dataclass
class ListRuntimeVersionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtime_versions: Optional[List[runtimeversion.RuntimeVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeVersions' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
