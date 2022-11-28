from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AnnotateFileRequest:
    r"""GoogleCloudVisionV1p2beta1AnnotateFileRequest
    A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
    """
    
    features: Optional[List[GoogleCloudVisionV1p2beta1Feature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image_context: Optional[GoogleCloudVisionV1p2beta1ImageContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    input_config: Optional[GoogleCloudVisionV1p2beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    pages: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    
