from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1parameter


@dataclass_json
@dataclass
class GoogleCloudChannelV1ChangeOfferRequest:
    offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer' }})
    parameters: Optional[List[googlecloudchannelv1parameter.GoogleCloudChannelV1Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderId' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
