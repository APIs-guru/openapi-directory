from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1offer


@dataclass_json
@dataclass
class GoogleCloudChannelV1TransferableOffer:
    offer: Optional[googlecloudchannelv1offer.GoogleCloudChannelV1Offer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer' }})
    
