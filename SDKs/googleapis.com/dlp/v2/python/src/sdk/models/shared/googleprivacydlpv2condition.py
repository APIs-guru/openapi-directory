from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fieldid
from . import googleprivacydlpv2value

class GooglePrivacyDlpV2ConditionOperatorEnum(str, Enum):
    RELATIONAL_OPERATOR_UNSPECIFIED = "RELATIONAL_OPERATOR_UNSPECIFIED"
    EQUAL_TO = "EQUAL_TO"
    NOT_EQUAL_TO = "NOT_EQUAL_TO"
    GREATER_THAN = "GREATER_THAN"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS"
    LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS"
    EXISTS = "EXISTS"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Condition:
    field: Optional[googleprivacydlpv2fieldid.GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    operator: Optional[GooglePrivacyDlpV2ConditionOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    value: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
