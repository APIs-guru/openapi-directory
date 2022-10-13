from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1entitlement


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListEntitlementsResponse:
    entitlements: Optional[List[googlecloudchannelv1entitlement.GoogleCloudChannelV1Entitlement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlements' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
