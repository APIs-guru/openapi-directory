from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2schedule


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Trigger:
    manual: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manual' }})
    schedule: Optional[googleprivacydlpv2schedule.GooglePrivacyDlpV2Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    
