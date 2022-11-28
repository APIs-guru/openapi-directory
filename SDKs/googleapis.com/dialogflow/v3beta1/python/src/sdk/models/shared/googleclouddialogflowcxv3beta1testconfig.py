from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestConfig:
    r"""GoogleCloudDialogflowCxV3beta1TestConfig
    Represents configurations for a test case.
    """
    
    flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    tracking_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingParameters') }})
    
