from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1VersionStatusEnum(str, Enum):
    VERSION_STATUS_UNSPECIFIED = "VERSION_STATUS_UNSPECIFIED"
    IN_PROGRESS = "IN_PROGRESS"
    READY = "READY"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Version:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[GoogleCloudDialogflowV2beta1VersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionNumber' }})
    
