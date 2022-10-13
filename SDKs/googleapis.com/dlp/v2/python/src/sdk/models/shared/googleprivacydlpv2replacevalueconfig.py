from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ReplaceValueConfig:
    new_value: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    
