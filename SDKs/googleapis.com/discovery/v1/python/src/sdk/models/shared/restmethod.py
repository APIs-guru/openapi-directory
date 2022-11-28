from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RestMethodMediaUploadProtocolsResumable:
    r"""RestMethodMediaUploadProtocolsResumable
    Supports the Resumable Media Upload protocol.
    """
    
    multipart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipart') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclass
class RestMethodMediaUploadProtocolsSimple:
    r"""RestMethodMediaUploadProtocolsSimple
    Supports uploading as a single HTTP request.
    """
    
    multipart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multipart') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass_json
@dataclass
class RestMethodMediaUploadProtocols:
    r"""RestMethodMediaUploadProtocols
    Supported upload protocols.
    """
    
    resumable: Optional[RestMethodMediaUploadProtocolsResumable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resumable') }})
    simple: Optional[RestMethodMediaUploadProtocolsSimple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simple') }})
    

@dataclass_json
@dataclass
class RestMethodMediaUpload:
    r"""RestMethodMediaUpload
    Media upload parameters.
    """
    
    accept: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accept') }})
    max_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    protocols: Optional[RestMethodMediaUploadProtocols] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    

@dataclass_json
@dataclass
class RestMethodRequest:
    r"""RestMethodRequest
    The schema for the request.
    """
    
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterName') }})
    

@dataclass_json
@dataclass
class RestMethodResponse:
    r"""RestMethodResponse
    The schema for the response.
    """
    
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    

@dataclass_json
@dataclass
class RestMethod:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etagRequired') }})
    flat_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flatPath') }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpMethod') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    media_upload: Optional[RestMethodMediaUpload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaUpload') }})
    parameter_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameterOrder') }})
    parameters: Optional[dict[str, JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    request: Optional[RestMethodRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: Optional[RestMethodResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    supports_media_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsMediaDownload') }})
    supports_media_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsMediaUpload') }})
    supports_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsSubscription') }})
    use_media_download_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useMediaDownloadService') }})
    
