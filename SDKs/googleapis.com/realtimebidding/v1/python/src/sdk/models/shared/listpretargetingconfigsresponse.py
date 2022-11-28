from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPretargetingConfigsResponse:
    r"""ListPretargetingConfigsResponse
    A response containing pretargeting configurations.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    pretargeting_configs: Optional[List[PretargetingConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pretargetingConfigs') }})
    
