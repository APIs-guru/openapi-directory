from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1sku


@dataclass_json
@dataclass
class GoogleCloudChannelV1PurchasableSku:
    sku: Optional[googlecloudchannelv1sku.GoogleCloudChannelV1Sku] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    
