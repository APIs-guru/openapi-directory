from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    BOOLEAN = "BOOLEAN"
    STRING = "STRING"
    STRING_SET = "STRING_SET"
    ENUM_VALUE = "ENUM_VALUE"
    DURATION_VALUE = "DURATION_VALUE"
    STRING_MAP = "STRING_MAP"


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1SettingMetadata:
    r"""GoogleCloudResourcesettingsV1SettingMetadata
    Metadata about a setting which is not editable by the end user.
    """
    
    data_type: Optional[GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    default_value: Optional[GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultValue') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    
