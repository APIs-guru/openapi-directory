from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaAddControlRequest:
    r"""GoogleCloudRetailV2alphaAddControlRequest
    Request for AddControl method.
    """
    
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlId') }})
    
