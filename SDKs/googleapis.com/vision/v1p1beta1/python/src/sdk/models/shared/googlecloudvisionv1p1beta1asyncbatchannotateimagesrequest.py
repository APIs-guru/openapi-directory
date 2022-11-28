from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest:
    r"""GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest
    Request for async image annotation for a list of images.
    """
    
    output_config: Optional[GoogleCloudVisionV1p1beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[List[GoogleCloudVisionV1p1beta1AnnotateImageRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
