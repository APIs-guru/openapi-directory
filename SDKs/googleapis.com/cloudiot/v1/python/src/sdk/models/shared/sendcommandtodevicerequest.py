from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendCommandToDeviceRequest:
    r"""SendCommandToDeviceRequest
    Request for `SendCommandToDevice`.
    """
    
    binary_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryData') }})
    subfolder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subfolder') }})
    
