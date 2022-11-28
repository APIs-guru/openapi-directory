from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetImagesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImageCreatedFrom:
    r"""GetImagesID200ApplicationJSONImageCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetImagesID200ApplicationJSONImageOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImageProtection:
    r"""GetImagesID200ApplicationJSONImageProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetImagesID200ApplicationJSONImageStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetImagesID200ApplicationJSONImageTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class GetImagesID200ApplicationJSONImage:
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetImagesID200ApplicationJSONImageCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetImagesID200ApplicationJSONImageOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetImagesID200ApplicationJSONImageProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetImagesID200ApplicationJSONImageStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetImagesID200ApplicationJSONImageTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclass
class GetImagesID200ApplicationJSON:
    image: Optional[GetImagesID200ApplicationJSONImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclass
class GetImagesIDRequest:
    path_params: GetImagesIDPathParams = field()
    

@dataclass
class GetImagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_images_id_200_application_json_object: Optional[GetImagesID200ApplicationJSON] = field(default=None)
    
