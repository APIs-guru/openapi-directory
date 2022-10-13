from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ObjectStorageKeyBucketAccessPermissionsEnum(str, Enum):
    READ_WRITE = "read_write"
    READ_ONLY = "read_only"


@dataclass_json
@dataclass
class ObjectStorageKeyBucketAccess:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket_name' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    permissions: Optional[ObjectStorageKeyBucketAccessPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class ObjectStorageKey:
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_key' }})
    bucket_access: Optional[List[ObjectStorageKeyBucketAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucket_access' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limited' }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret_key' }})
    
