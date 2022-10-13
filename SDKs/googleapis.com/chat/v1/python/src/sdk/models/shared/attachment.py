from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attachmentdataref
from . import drivedataref

class AttachmentSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    DRIVE_FILE = "DRIVE_FILE"
    UPLOADED_CONTENT = "UPLOADED_CONTENT"


@dataclass_json
@dataclass
class Attachment:
    attachment_data_ref: Optional[attachmentdataref.AttachmentDataRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentDataRef' }})
    content_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentName' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadUri' }})
    drive_data_ref: Optional[drivedataref.DriveDataRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveDataRef' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    source: Optional[AttachmentSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    thumbnail_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailUri' }})
    
