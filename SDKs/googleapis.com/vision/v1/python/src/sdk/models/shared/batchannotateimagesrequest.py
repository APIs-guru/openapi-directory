from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import annotateimagerequest


@dataclass_json
@dataclass
class BatchAnnotateImagesRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[annotateimagerequest.AnnotateImageRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
