from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1price


@dataclass_json
@dataclass
class GoogleCloudChannelV1PriceTier:
    first_resource: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstResource' }})
    last_resource: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastResource' }})
    price: Optional[googlecloudchannelv1price.GoogleCloudChannelV1Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
