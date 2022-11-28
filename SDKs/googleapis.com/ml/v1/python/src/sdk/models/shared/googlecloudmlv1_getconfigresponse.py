from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1GetConfigResponse:
    r"""GoogleCloudMlV1GetConfigResponse
    Returns service account information associated with a project.
    """
    
    config: Optional[GoogleCloudMlV1Config] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_account_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountProject') }})
    
