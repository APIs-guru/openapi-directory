from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListTransferableSkusRequest:
    auth_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authToken' }})
    cloud_identity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudIdentityId' }})
    customer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerName' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    
