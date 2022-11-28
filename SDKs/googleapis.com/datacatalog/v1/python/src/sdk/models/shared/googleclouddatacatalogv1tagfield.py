from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagFieldInput:
    r"""GoogleCloudDatacatalogV1TagFieldInput
    Contains the value and additional information on a field within a Tag.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    enum_value: Optional[GoogleCloudDatacatalogV1TagFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    richtext_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richtextValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagField:
    r"""GoogleCloudDatacatalogV1TagField
    Contains the value and additional information on a field within a Tag.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    enum_value: Optional[GoogleCloudDatacatalogV1TagFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValue') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    richtext_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richtextValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    
