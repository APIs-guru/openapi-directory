from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResellernotifyGetwatchdetailsResponse:
    service_account_email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmailAddresses' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicName' }})
    
