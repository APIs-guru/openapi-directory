from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotypelimit


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FindingLimits:
    max_findings_per_info_type: Optional[List[googleprivacydlpv2infotypelimit.GooglePrivacyDlpV2InfoTypeLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFindingsPerInfoType' }})
    max_findings_per_item: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFindingsPerItem' }})
    max_findings_per_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxFindingsPerRequest' }})
    
