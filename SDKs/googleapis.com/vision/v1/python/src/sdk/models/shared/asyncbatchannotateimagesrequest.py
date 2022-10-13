from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outputconfig
from . import annotateimagerequest


@dataclass_json
@dataclass
class AsyncBatchAnnotateImagesRequest:
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    requests: Optional[List[annotateimagerequest.AnnotateImageRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
