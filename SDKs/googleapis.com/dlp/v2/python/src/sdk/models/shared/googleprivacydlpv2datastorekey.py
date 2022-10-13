from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2key


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DatastoreKey:
    entity_key: Optional[googleprivacydlpv2key.GooglePrivacyDlpV2Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityKey' }})
    
