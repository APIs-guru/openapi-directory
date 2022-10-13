from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2infotype
from . import googleprivacydlpv2inspectionrule


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectionRuleSet:
    info_types: Optional[List[googleprivacydlpv2infotype.GooglePrivacyDlpV2InfoType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infoTypes' }})
    rules: Optional[List[googleprivacydlpv2inspectionrule.GooglePrivacyDlpV2InspectionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
