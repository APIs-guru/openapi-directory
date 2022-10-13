from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1entitlement


@dataclass_json
@dataclass
class GoogleCloudChannelV1CreateEntitlementRequest:
    entitlement: Optional[googlecloudchannelv1entitlement.GoogleCloudChannelV1Entitlement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entitlement' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
