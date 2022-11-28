from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum(str, Enum):
    LOGICAL_OPERATOR_UNSPECIFIED = "LOGICAL_OPERATOR_UNSPECIFIED"
    AND = "AND"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Expressions:
    r"""GooglePrivacyDlpV2Expressions
    An expression, consisting of an operator and conditions.
    """
    
    conditions: Optional[GooglePrivacyDlpV2Conditions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    logical_operator: Optional[GooglePrivacyDlpV2ExpressionsLogicalOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logicalOperator') }})
    
