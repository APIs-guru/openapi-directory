from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servingconfig
from . import actinguser
from . import actinguser
from . import actinguser

class VersionStatusEnum(str, Enum):
    VERSION_STATUS_UNSPECIFIED = "VERSION_STATUS_UNSPECIFIED"
    CREATED = "CREATED"
    FINALIZED = "FINALIZED"
    DELETED = "DELETED"
    ABANDONED = "ABANDONED"
    EXPIRED = "EXPIRED"
    CLONING = "CLONING"


@dataclass_json
@dataclass
class Version:
    config: Optional[servingconfig.ServingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    create_user: Optional[actinguser.ActingUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createUser' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    delete_user: Optional[actinguser.ActingUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteUser' }})
    file_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileCount' }})
    finalize_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalizeTime' }})
    finalize_user: Optional[actinguser.ActingUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalizeUser' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[VersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionBytes' }})
    
