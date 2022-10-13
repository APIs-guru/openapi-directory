from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotatefilerequest


@dataclass_json
@dataclass
class BatchAnnotateFilesRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[annotatefilerequest.AnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
