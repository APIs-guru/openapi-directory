from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature
from . import imagecontext
from . import inputconfig


@dataclass_json
@dataclass
class AnnotateFileRequest:
    features: Optional[List[feature.Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image_context: Optional[imagecontext.ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    input_config: Optional[inputconfig.InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    pages: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    
