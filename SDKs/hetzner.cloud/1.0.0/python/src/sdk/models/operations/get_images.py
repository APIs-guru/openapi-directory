from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetImagesSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    NAME = "name"
    NAME_ASC = "name:asc"
    NAME_DESC = "name:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"

class GetImagesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"

class GetImagesTypeEnum(str, Enum):
    SYSTEM = "system"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    APP = "app"


@dataclass
class GetImagesQueryParams:
    bound_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bound_to', 'style': 'form', 'explode': True }})
    include_deprecated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_deprecated', 'style': 'form', 'explode': True }})
    label_selector: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetImagesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetImagesStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[GetImagesTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetImages200ApplicationJSONImagesCreatedFrom:
    r"""GetImages200ApplicationJSONImagesCreatedFrom
    Information about the Server the Image was created from
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetImages200ApplicationJSONImagesOsFlavorEnum(str, Enum):
    UBUNTU = "ubuntu"
    CENTOS = "centos"
    DEBIAN = "debian"
    FEDORA = "fedora"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class GetImages200ApplicationJSONImagesProtection:
    r"""GetImages200ApplicationJSONImagesProtection
    Protection configuration for the Resource
    """
    
    delete: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetImages200ApplicationJSONImagesStatusEnum(str, Enum):
    AVAILABLE = "available"
    CREATING = "creating"
    UNAVAILABLE = "unavailable"

class GetImages200ApplicationJSONImagesTypeEnum(str, Enum):
    SYSTEM = "system"
    APP = "app"
    SNAPSHOT = "snapshot"
    BACKUP = "backup"
    TEMPORARY = "temporary"


@dataclass_json
@dataclass
class GetImages200ApplicationJSONImages:
    bound_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bound_to') }})
    created: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    created_from: GetImages200ApplicationJSONImagesCreatedFrom = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_from') }})
    deleted: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    deprecated: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecated') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk_size') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_size') }})
    labels: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_flavor: GetImages200ApplicationJSONImagesOsFlavorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_flavor') }})
    os_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    protection: GetImages200ApplicationJSONImagesProtection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    status: GetImages200ApplicationJSONImagesStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: GetImages200ApplicationJSONImagesTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build_id') }})
    rapid_deploy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rapid_deploy') }})
    

@dataclass_json
@dataclass
class GetImages200ApplicationJSONMetaPagination:
    last_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclass
class GetImages200ApplicationJSONMeta:
    pagination: GetImages200ApplicationJSONMetaPagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclass
class GetImages200ApplicationJSON:
    images: List[GetImages200ApplicationJSONImages] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    meta: Optional[GetImages200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class GetImagesRequest:
    query_params: GetImagesQueryParams = field()
    

@dataclass
class GetImagesResponse:
    content_type: str = field()
    status_code: int = field()
    get_images_200_application_json_object: Optional[GetImages200ApplicationJSON] = field(default=None)
    
