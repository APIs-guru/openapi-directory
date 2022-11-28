from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AttachmentSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    DRIVE_FILE = "DRIVE_FILE"
    UPLOADED_CONTENT = "UPLOADED_CONTENT"


@dataclass_json
@dataclass
class Attachment:
    r"""Attachment
    An attachment in Google Chat.
    """
    
    attachment_data_ref: Optional[AttachmentDataRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentDataRef') }})
    content_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentName') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadUri') }})
    drive_data_ref: Optional[DriveDataRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveDataRef') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Optional[AttachmentSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUri') }})
    

@dataclass_json
@dataclass
class AttachmentInput:
    r"""AttachmentInput
    An attachment in Google Chat.
    """
    
    attachment_data_ref: Optional[AttachmentDataRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentDataRef') }})
    content_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentName') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    drive_data_ref: Optional[DriveDataRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveDataRef') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Optional[AttachmentSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
