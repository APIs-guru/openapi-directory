from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import campaigncreativeassociation


@dataclass_json
@dataclass
class CampaignCreativeAssociationsListResponse:
    campaign_creative_associations: Optional[List[campaigncreativeassociation.CampaignCreativeAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignCreativeAssociations' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
