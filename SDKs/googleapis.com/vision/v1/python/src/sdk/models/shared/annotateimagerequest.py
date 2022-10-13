from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import feature
from . import image
from . import imagecontext


@dataclass_json
@dataclass
class AnnotateImageRequest:
    features: Optional[List[feature.Feature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_context: Optional[imagecontext.ImageContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContext' }})
    
