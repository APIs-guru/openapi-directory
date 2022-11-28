from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse:
    r"""GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse
    Response to list SfdcChannels.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sfdc_channels: Optional[List[GoogleCloudIntegrationsV1alphaSfdcChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sfdcChannels') }})
    
