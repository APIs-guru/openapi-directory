from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CheckRequest:
    r"""CheckRequest
    Request message for the Check method.
    """
    
    operation: Optional[Operation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    request_project_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestProjectSettings') }})
    service_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    skip_activation_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipActivationCheck') }})
    
