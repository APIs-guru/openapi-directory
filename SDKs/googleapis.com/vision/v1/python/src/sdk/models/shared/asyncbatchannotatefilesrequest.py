from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asyncannotatefilerequest


@dataclass_json
@dataclass
class AsyncBatchAnnotateFilesRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[asyncannotatefilerequest.AsyncAnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
