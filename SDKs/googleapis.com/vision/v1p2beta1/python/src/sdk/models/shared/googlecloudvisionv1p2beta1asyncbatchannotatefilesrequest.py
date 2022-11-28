from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest:
    r"""GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest
    Multiple async file annotation requests are batched into a single service call.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[List[GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
