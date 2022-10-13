from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotateimageresponse


@dataclass_json
@dataclass
class BatchAnnotateImagesResponse:
    responses: Optional[List[annotateimageresponse.AnnotateImageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
