from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2tableoptions


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridOptions:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    required_finding_label_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredFindingLabelKeys' }})
    table_options: Optional[googleprivacydlpv2tableoptions.GooglePrivacyDlpV2TableOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableOptions' }})
    
