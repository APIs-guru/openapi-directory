from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CampaignManagerIds:
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adId' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementId' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    
