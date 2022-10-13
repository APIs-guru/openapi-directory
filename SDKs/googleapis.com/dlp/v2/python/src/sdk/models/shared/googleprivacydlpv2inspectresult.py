from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2finding


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectResult:
    findings: Optional[List[googleprivacydlpv2finding.GooglePrivacyDlpV2Finding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findings' }})
    findings_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findingsTruncated' }})
    
