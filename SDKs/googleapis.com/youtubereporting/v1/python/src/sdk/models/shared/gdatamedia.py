from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GdataMediaReferenceTypeEnum(str, Enum):
    PATH = "PATH"
    BLOB_REF = "BLOB_REF"
    INLINE = "INLINE"
    GET_MEDIA = "GET_MEDIA"
    COMPOSITE_MEDIA = "COMPOSITE_MEDIA"
    BIGSTORE_REF = "BIGSTORE_REF"
    DIFF_VERSION_RESPONSE = "DIFF_VERSION_RESPONSE"
    DIFF_CHECKSUMS_RESPONSE = "DIFF_CHECKSUMS_RESPONSE"
    DIFF_DOWNLOAD_RESPONSE = "DIFF_DOWNLOAD_RESPONSE"
    DIFF_UPLOAD_REQUEST = "DIFF_UPLOAD_REQUEST"
    DIFF_UPLOAD_RESPONSE = "DIFF_UPLOAD_RESPONSE"
    COSMO_BINARY_REFERENCE = "COSMO_BINARY_REFERENCE"
    ARBITRARY_BYTES = "ARBITRARY_BYTES"


@dataclass_json
@dataclass
class GdataMedia:
    r"""GdataMedia
    gdata
    """
    
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    bigstore_object_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigstoreObjectRef') }})
    blob_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobRef') }})
    blobstore2_info: Optional[GdataBlobstore2Info] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobstore2Info') }})
    composite_media: Optional[List[GdataCompositeMedia]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compositeMedia') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    content_type_info: Optional[GdataContentTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentTypeInfo') }})
    cosmo_binary_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cosmoBinaryReference') }})
    crc32c_hash: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32cHash') }})
    diff_checksums_response: Optional[GdataDiffChecksumsResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffChecksumsResponse') }})
    diff_download_response: Optional[GdataDiffDownloadResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffDownloadResponse') }})
    diff_upload_request: Optional[GdataDiffUploadRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadRequest') }})
    diff_upload_response: Optional[GdataDiffUploadResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffUploadResponse') }})
    diff_version_response: Optional[GdataDiffVersionResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diffVersionResponse') }})
    download_parameters: Optional[GdataDownloadParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadParameters') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    hash_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashVerified') }})
    inline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    is_potential_retry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPotentialRetry') }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    md5_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Hash') }})
    media_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaId') }})
    object_id: Optional[GdataObjectID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reference_type: Optional[GdataMediaReferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceType') }})
    sha1_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Hash') }})
    sha256_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Hash') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
