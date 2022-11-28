from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ValidationResult:
    r"""GoogleCloudDialogflowV2beta1ValidationResult
    Represents the output of agent validation.
    """
    
    validation_errors: Optional[List[GoogleCloudDialogflowV2beta1ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationErrors') }})
    
