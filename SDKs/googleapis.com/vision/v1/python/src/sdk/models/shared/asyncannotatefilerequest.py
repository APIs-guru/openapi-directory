from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature
from . import imagecontext
from . import inputconfig
from . import outputconfig


@dataclass_json
@dataclass
class AsyncAnnotateFileRequest:
    features: Optional[List[feature.Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image_context: Optional[imagecontext.ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    input_config: Optional[inputconfig.InputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputConfig' }})
    output_config: Optional[outputconfig.OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    
