from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2expressions


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordCondition:
    expressions: Optional[googleprivacydlpv2expressions.GooglePrivacyDlpV2Expressions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressions' }})
    
