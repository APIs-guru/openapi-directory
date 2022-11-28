from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AttributeValueTypeEnum(str, Enum):
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    ENUM = "ENUM"
    URL = "URL"
    REPEATED_ENUM = "REPEATED_ENUM"


@dataclass_json
@dataclass
class Attribute:
    r"""Attribute
    A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
    """
    
    attribute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeId') }})
    repeated_enum_value: Optional[RepeatedEnumAttributeValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatedEnumValue') }})
    url_values: Optional[List[URLAttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlValues') }})
    value_type: Optional[AttributeValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    values: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
