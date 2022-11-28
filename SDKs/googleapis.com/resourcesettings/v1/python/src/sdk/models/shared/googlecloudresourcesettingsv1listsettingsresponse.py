from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1ListSettingsResponse:
    r"""GoogleCloudResourcesettingsV1ListSettingsResponse
    The response from ListSettings.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    settings: Optional[List[GoogleCloudResourcesettingsV1Setting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
