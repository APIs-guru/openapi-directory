from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ExplainRequest:
    r"""GoogleCloudMlV1ExplainRequest
    Request for explanations to be issued against a trained model.
    """
    
    http_body: Optional[GoogleAPIHTTPBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpBody') }})
    
