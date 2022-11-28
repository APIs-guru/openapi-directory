from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest:
    r"""GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest
    A list of requests to annotate files using the BatchAnnotateFiles API.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    requests: Optional[List[GoogleCloudVisionV1p2beta1AnnotateFileRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
