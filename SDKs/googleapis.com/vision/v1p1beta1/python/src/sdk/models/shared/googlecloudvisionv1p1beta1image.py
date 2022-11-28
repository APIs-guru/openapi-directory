from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1Image:
    r"""GoogleCloudVisionV1p1beta1Image
    Client image to perform Google Cloud Vision API tasks over.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    source: Optional[GoogleCloudVisionV1p1beta1ImageSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
