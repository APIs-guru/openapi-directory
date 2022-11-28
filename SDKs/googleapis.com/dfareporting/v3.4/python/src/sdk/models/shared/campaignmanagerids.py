from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CampaignManagerIds:
    r"""CampaignManagerIds
    Campaign Manager IDs related to the custom event.
    """
    
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adId') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementId') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    
