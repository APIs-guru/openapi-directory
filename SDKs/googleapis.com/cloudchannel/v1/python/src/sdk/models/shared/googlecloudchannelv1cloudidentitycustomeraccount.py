from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1CloudIdentityCustomerAccount:
    customer_cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerCloudIdentityId' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerName' }})
    existing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'existing' }})
    owned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owned' }})
    
