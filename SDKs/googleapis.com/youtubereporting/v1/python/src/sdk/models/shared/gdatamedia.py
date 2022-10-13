from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import gdatablobstore2info
from . import gdatacompositemedia
from . import gdatacontenttypeinfo
from . import gdatadiffchecksumsresponse
from . import gdatadiffdownloadresponse
from . import gdatadiffuploadrequest
from . import gdatadiffuploadresponse
from . import gdatadiffversionresponse
from . import gdatadownloadparameters
from . import gdataobjectid

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
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    bigstore_object_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigstoreObjectRef' }})
    blob_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobRef' }})
    blobstore2_info: Optional[gdatablobstore2info.GdataBlobstore2Info] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobstore2Info' }})
    composite_media: Optional[List[gdatacompositemedia.GdataCompositeMedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compositeMedia' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    content_type_info: Optional[gdatacontenttypeinfo.GdataContentTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentTypeInfo' }})
    cosmo_binary_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cosmoBinaryReference' }})
    crc32c_hash: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crc32cHash' }})
    diff_checksums_response: Optional[gdatadiffchecksumsresponse.GdataDiffChecksumsResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffChecksumsResponse' }})
    diff_download_response: Optional[gdatadiffdownloadresponse.GdataDiffDownloadResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffDownloadResponse' }})
    diff_upload_request: Optional[gdatadiffuploadrequest.GdataDiffUploadRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffUploadRequest' }})
    diff_upload_response: Optional[gdatadiffuploadresponse.GdataDiffUploadResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffUploadResponse' }})
    diff_version_response: Optional[gdatadiffversionresponse.GdataDiffVersionResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diffVersionResponse' }})
    download_parameters: Optional[gdatadownloadparameters.GdataDownloadParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadParameters' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    hash_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashVerified' }})
    inline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inline' }})
    is_potential_retry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPotentialRetry' }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    md5_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5Hash' }})
    media_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaId' }})
    object_id: Optional[gdataobjectid.GdataObjectID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    reference_type: Optional[GdataMediaReferenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceType' }})
    sha1_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Hash' }})
    sha256_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256Hash' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
