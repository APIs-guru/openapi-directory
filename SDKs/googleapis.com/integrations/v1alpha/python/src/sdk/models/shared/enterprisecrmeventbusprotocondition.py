from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmeventbusprotovaluetype

class EnterpriseCrmEventbusProtoConditionOperatorEnum(str, Enum):
    UNSET = "UNSET"
    EQUALS = "EQUALS"
    CONTAINS = "CONTAINS"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"
    EXISTS = "EXISTS"
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
    IS_EMPTY = "IS_EMPTY"
    IS_NOT_EMPTY = "IS_NOT_EMPTY"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoCondition:
    event_property_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventPropertyKey' }})
    operator: Optional[EnterpriseCrmEventbusProtoConditionOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    value: Optional[enterprisecrmeventbusprotovaluetype.EnterpriseCrmEventbusProtoValueType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
