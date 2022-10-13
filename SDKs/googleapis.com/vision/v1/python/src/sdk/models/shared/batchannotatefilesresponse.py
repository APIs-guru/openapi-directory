from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotatefileresponse


@dataclass_json
@dataclass
class BatchAnnotateFilesResponse:
    responses: Optional[List[annotatefileresponse.AnnotateFileResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
