from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaRemoveControlRequest:
    r"""GoogleCloudRetailV2betaRemoveControlRequest
    Request for RemoveControl method.
    """
    
    control_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlId') }})
    
