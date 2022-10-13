from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2conditions

class GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum(str, Enum):
    LOGICAL_OPERATOR_UNSPECIFIED = "LOGICAL_OPERATOR_UNSPECIFIED"
    AND = "AND"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Expressions:
    conditions: Optional[googleprivacydlpv2conditions.GooglePrivacyDlpV2Conditions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    logical_operator: Optional[GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalOperator' }})
    
