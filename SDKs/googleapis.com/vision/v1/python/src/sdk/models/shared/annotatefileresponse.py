from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import inputconfig
from . import annotateimageresponse


@dataclass_json
@dataclass
class AnnotateFileResponse:
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    input_config: Optional[inputconfig.InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    responses: Optional[List[annotateimageresponse.AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    total_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPages' }})
    
