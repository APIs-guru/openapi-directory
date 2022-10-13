from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2color


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageRedactionConfig:
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    redact_all_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactAllText' }})
    redaction_color: Optional[googleprivacydlpv2color.GooglePrivacyDlpV2Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redactionColor' }})
    
