from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudresourcesettingsv1value

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
    data_type: Optional[GoogleCloudResourcesettingsV1SettingMetadataDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    default_value: Optional[googlecloudresourcesettingsv1value.GoogleCloudResourcesettingsV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    
