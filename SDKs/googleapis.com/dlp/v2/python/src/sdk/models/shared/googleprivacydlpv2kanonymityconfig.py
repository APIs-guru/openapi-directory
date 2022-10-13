from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2entityid
from . import googleprivacydlpv2fieldid


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityConfig:
    entity_id: Optional[googleprivacydlpv2entityid.GooglePrivacyDlpV2EntityID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityId' }})
    quasi_ids: Optional[List[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIds' }})
    
