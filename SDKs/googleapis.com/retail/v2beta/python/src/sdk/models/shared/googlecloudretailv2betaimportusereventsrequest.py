from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaImportUserEventsRequestInput:
    r"""GoogleCloudRetailV2betaImportUserEventsRequestInput
    Request message for the ImportUserEvents request.
    """
    
    errors_config: Optional[GoogleCloudRetailV2betaImportErrorsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorsConfig') }})
    input_config: Optional[GoogleCloudRetailV2betaUserEventInputConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    
