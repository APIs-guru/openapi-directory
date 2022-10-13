from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConfigFileFileTypeEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    SERVICE_CONFIG_YAML = "SERVICE_CONFIG_YAML"
    OPEN_API_JSON = "OPEN_API_JSON"
    OPEN_API_YAML = "OPEN_API_YAML"
    FILE_DESCRIPTOR_SET_PROTO = "FILE_DESCRIPTOR_SET_PROTO"
    PROTO_FILE = "PROTO_FILE"


@dataclass_json
@dataclass
class ConfigFile:
    file_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileContents' }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    file_type: Optional[ConfigFileFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    
