from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest:
    r"""GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest
    An offline file annotation request.
    """
    
    features: Optional[List[GoogleCloudVisionV1p1beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image_context: Optional[GoogleCloudVisionV1p1beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    input_config: Optional[GoogleCloudVisionV1p1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    output_config: Optional[GoogleCloudVisionV1p1beta1OutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    
