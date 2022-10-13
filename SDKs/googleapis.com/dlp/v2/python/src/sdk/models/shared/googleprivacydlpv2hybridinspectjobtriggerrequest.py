from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2hybridcontentitem


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridInspectJobTriggerRequest:
    hybrid_item: Optional[googleprivacydlpv2hybridcontentitem.GooglePrivacyDlpV2HybridContentItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hybridItem' }})
    
