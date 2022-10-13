from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1marketinginfo
from . import googlecloudchannelv1product


@dataclass_json
@dataclass
class GoogleCloudChannelV1Sku:
    marketing_info: Optional[googlecloudchannelv1marketinginfo.GoogleCloudChannelV1MarketingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product: Optional[googlecloudchannelv1product.GoogleCloudChannelV1Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
