from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeStats:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    info_type: Optional[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoType' }})
    
