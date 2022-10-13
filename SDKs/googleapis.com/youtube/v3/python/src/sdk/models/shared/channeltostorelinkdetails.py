from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelToStoreLinkDetails:
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeName' }})
    store_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeUrl' }})
    
