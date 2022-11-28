from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MetadataOptionsACLEnum(str, Enum):
    ACL_UNSPECIFIED = "ACL_UNSPECIFIED"
    ACL_DESTINATION_BUCKET_DEFAULT = "ACL_DESTINATION_BUCKET_DEFAULT"
    ACL_PRESERVE = "ACL_PRESERVE"

class MetadataOptionsGidEnum(str, Enum):
    GID_UNSPECIFIED = "GID_UNSPECIFIED"
    GID_SKIP = "GID_SKIP"
    GID_NUMBER = "GID_NUMBER"

class MetadataOptionsKmsKeyEnum(str, Enum):
    KMS_KEY_UNSPECIFIED = "KMS_KEY_UNSPECIFIED"
    KMS_KEY_DESTINATION_BUCKET_DEFAULT = "KMS_KEY_DESTINATION_BUCKET_DEFAULT"
    KMS_KEY_PRESERVE = "KMS_KEY_PRESERVE"

class MetadataOptionsModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    MODE_SKIP = "MODE_SKIP"
    MODE_PRESERVE = "MODE_PRESERVE"

class MetadataOptionsStorageClassEnum(str, Enum):
    STORAGE_CLASS_UNSPECIFIED = "STORAGE_CLASS_UNSPECIFIED"
    STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT = "STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT"
    STORAGE_CLASS_PRESERVE = "STORAGE_CLASS_PRESERVE"
    STORAGE_CLASS_STANDARD = "STORAGE_CLASS_STANDARD"
    STORAGE_CLASS_NEARLINE = "STORAGE_CLASS_NEARLINE"
    STORAGE_CLASS_COLDLINE = "STORAGE_CLASS_COLDLINE"
    STORAGE_CLASS_ARCHIVE = "STORAGE_CLASS_ARCHIVE"

class MetadataOptionsSymlinkEnum(str, Enum):
    SYMLINK_UNSPECIFIED = "SYMLINK_UNSPECIFIED"
    SYMLINK_SKIP = "SYMLINK_SKIP"
    SYMLINK_PRESERVE = "SYMLINK_PRESERVE"

class MetadataOptionsTemporaryHoldEnum(str, Enum):
    TEMPORARY_HOLD_UNSPECIFIED = "TEMPORARY_HOLD_UNSPECIFIED"
    TEMPORARY_HOLD_SKIP = "TEMPORARY_HOLD_SKIP"
    TEMPORARY_HOLD_PRESERVE = "TEMPORARY_HOLD_PRESERVE"

class MetadataOptionsTimeCreatedEnum(str, Enum):
    TIME_CREATED_UNSPECIFIED = "TIME_CREATED_UNSPECIFIED"
    TIME_CREATED_SKIP = "TIME_CREATED_SKIP"
    TIME_CREATED_PRESERVE_AS_CUSTOM_TIME = "TIME_CREATED_PRESERVE_AS_CUSTOM_TIME"

class MetadataOptionsUIDEnum(str, Enum):
    UID_UNSPECIFIED = "UID_UNSPECIFIED"
    UID_SKIP = "UID_SKIP"
    UID_NUMBER = "UID_NUMBER"


@dataclass_json
@dataclass
class MetadataOptions:
    r"""MetadataOptions
    Specifies the metadata options for running a transfer.
    """
    
    acl: Optional[MetadataOptionsACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    gid: Optional[MetadataOptionsGidEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    kms_key: Optional[MetadataOptionsKmsKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    mode: Optional[MetadataOptionsModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    storage_class: Optional[MetadataOptionsStorageClassEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageClass') }})
    symlink: Optional[MetadataOptionsSymlinkEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symlink') }})
    temporary_hold: Optional[MetadataOptionsTemporaryHoldEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temporaryHold') }})
    time_created: Optional[MetadataOptionsTimeCreatedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeCreated') }})
    uid: Optional[MetadataOptionsUIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    
