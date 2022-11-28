from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum(str, Enum):
    DEFAULT_INCLUSIVE = "DEFAULT_INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList:
    r"""EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList
    List of error enums for alerts.
    """
    
    enum_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumStrings') }})
    filter_type: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterType') }})
    
