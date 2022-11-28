from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ImportDataRequest:
    r"""GoogleCloudDatalabelingV1beta1ImportDataRequest
    Request message for ImportData API.
    """
    
    input_config: Optional[GoogleCloudDatalabelingV1beta1InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    user_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmailAddress') }})
    
