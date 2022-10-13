from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2hotwordrule


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DetectionRule:
    hotword_rule: Optional[googleprivacydlpv2hotwordrule.GooglePrivacyDlpV2HotwordRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotwordRule' }})
    
