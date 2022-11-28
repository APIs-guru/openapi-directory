from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PutImagesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PutImagesIDUpdateImageRequestTypeEnum(str, Enum):
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PutImagesIDUpdateImageRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    type: Optional[PutImagesIDUpdateImageRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PutImagesID200ApplicationJSONImageCreatedFrom:
    r"""PutImagesID200ApplicationJSONImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class PutImagesID200ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PutImagesID200ApplicationJSONImageProtection:
    r"""PutImagesID200ApplicationJSONImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class PutImagesID200ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class PutImagesID200ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class PutImagesID200ApplicationJSONImage:
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: PutImagesID200ApplicationJSONImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: PutImagesID200ApplicationJSONImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: PutImagesID200ApplicationJSONImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: PutImagesID200ApplicationJSONImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: PutImagesID200ApplicationJSONImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclass
class PutImagesID200ApplicationJSON:
    image: Optional[PutImagesID200ApplicationJSONImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclass
class PutImagesIDRequest:
    path_params: PutImagesIDPathParams = field()
    request: Optional[PutImagesIDUpdateImageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutImagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    put_images_id_200_application_json_object: Optional[PutImagesID200ApplicationJSON] = field(default=None)
    
