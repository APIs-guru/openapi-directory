from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListEntitlementsResponse:
    r"""GoogleCloudChannelV1ListEntitlementsResponse
    Response message for CloudChannelService.ListEntitlements.
    """
    
    entitlements: Optional[List[GoogleCloudChannelV1Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlements') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
