from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2recordcondition


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordSuppression:
    condition: Optional[googleprivacydlpv2recordcondition.GooglePrivacyDlpV2RecordCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    
