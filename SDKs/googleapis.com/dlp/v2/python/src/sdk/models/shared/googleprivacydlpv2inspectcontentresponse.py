from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2inspectresult


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectContentResponse:
    result: Optional[googleprivacydlpv2inspectresult.GooglePrivacyDlpV2InspectResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
