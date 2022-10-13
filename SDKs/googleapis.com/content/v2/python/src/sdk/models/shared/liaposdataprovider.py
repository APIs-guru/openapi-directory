from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiaPosDataProvider:
    pos_data_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posDataProviderId' }})
    pos_external_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posExternalAccountId' }})
    
