from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3DtmfInput:
    r"""GoogleCloudDialogflowCxV3DtmfInput
    Represents the input for dtmf event.
    """
    
    digits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digits') }})
    finish_digit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishDigit') }})
    
