from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import repeatedenumattributevalue
from . import uriattributevalue

class AttributeValueTypeEnum(str, Enum):
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    ENUM = "ENUM"
    URL = "URL"
    REPEATED_ENUM = "REPEATED_ENUM"


@dataclass_json
@dataclass
class Attribute:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    repeated_enum_value: Optional[repeatedenumattributevalue.RepeatedEnumAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatedEnumValue' }})
    uri_values: Optional[List[uriattributevalue.URIAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uriValues' }})
    value_type: Optional[AttributeValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
