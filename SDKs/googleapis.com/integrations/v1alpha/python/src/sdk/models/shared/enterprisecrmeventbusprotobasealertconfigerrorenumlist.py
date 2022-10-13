from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum(str, Enum):
    DEFAULT_INCLUSIVE = "DEFAULT_INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList:
    enum_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumStrings' }})
    filter_type: Optional[EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterType' }})
    
