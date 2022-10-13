from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import gdatablobstore2info
from . import gdataobjectid

class GdataCompositeMediaReferenceTypeEnum(str, Enum):
    PATH = "PATH"
    BLOB_REF = "BLOB_REF"
    INLINE = "INLINE"
    BIGSTORE_REF = "BIGSTORE_REF"
    COSMO_BINARY_REFERENCE = "COSMO_BINARY_REFERENCE"


@dataclass_json
@dataclass
class GdataCompositeMedia:
    blob_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobRef' }})
    blobstore2_info: Optional[gdatablobstore2info.GdataBlobstore2Info] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobstore2Info' }})
    cosmo_binary_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cosmoBinaryReference' }})
    crc32c_hash: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crc32cHash' }})
    inline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inline' }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    md5_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5Hash' }})
    object_id: Optional[gdataobjectid.GdataObjectID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    reference_type: Optional[GdataCompositeMediaReferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceType' }})
    sha1_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Hash' }})
    
