from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2condition


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Conditions:
    conditions: Optional[List[googleprivacydlpv2condition.GooglePrivacyDlpV2Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    
