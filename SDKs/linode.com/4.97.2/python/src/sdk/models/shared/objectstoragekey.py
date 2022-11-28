from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectStorageKeyBucketAccessPermissionsEnum(str, Enum):
    READ_WRITE = "read_write"
    READ_ONLY = "read_only"


@dataclass_json
@dataclass
class ObjectStorageKeyBucketAccess:
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket_name') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    permissions: Optional[ObjectStorageKeyBucketAccessPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class ObjectStorageKey:
    r"""ObjectStorageKey
    A keypair used to communicate with the Object Storage S3 API.
    """
    
    access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_key') }})
    bucket_access: Optional[List[ObjectStorageKeyBucketAccess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket_access') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    limited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limited') }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret_key') }})
    

@dataclass_json
@dataclass
class ObjectStorageKeyInput:
    r"""ObjectStorageKeyInput
    A keypair used to communicate with the Object Storage S3 API.
    """
    
    bucket_access: Optional[List[ObjectStorageKeyBucketAccess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucket_access') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
