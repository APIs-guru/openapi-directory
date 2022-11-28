from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IntegratorCardPayloadResponseResponseVersionEnum(str, Enum):
    V1 = "v1"
    V3 = "v3"


@dataclass_json
@dataclass
class IntegratorCardPayloadResponse:
    r"""IntegratorCardPayloadResponse
    The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
    """
    
    total_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    all_items_link_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allItemsLinkUrl') }})
    card_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardLabel') }})
    response_version: Optional[IntegratorCardPayloadResponseResponseVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseVersion') }})
    sections: Optional[List[IntegratorObjectResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    top_level_actions: Optional[TopLevelActions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLevelActions') }})
    
