from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagField:
    r"""GoogleCloudDatacatalogV1beta1TagField
    Contains the value and supporting information for a field within a Tag.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    enum_value: Optional[GoogleCloudDatacatalogV1beta1TagFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagFieldInput:
    r"""GoogleCloudDatacatalogV1beta1TagFieldInput
    Contains the value and supporting information for a field within a Tag.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    enum_value: Optional[GoogleCloudDatacatalogV1beta1TagFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    
