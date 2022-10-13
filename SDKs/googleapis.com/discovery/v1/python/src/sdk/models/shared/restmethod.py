from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import jsonschema


@dataclass_json
@dataclass
class RestMethodMediaUploadProtocolsResumable:
    multipart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipart' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class RestMethodMediaUploadProtocolsSimple:
    multipart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipart' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    

@dataclass_json
@dataclass
class RestMethodMediaUploadProtocols:
    resumable: Optional[RestMethodMediaUploadProtocolsResumable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resumable' }})
    simple: Optional[RestMethodMediaUploadProtocolsSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simple' }})
    

@dataclass_json
@dataclass
class RestMethodMediaUpload:
    accept: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accept' }})
    max_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    protocols: Optional[RestMethodMediaUploadProtocols] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    

@dataclass_json
@dataclass
class RestMethodRequest:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$ref' }})
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterName' }})
    

@dataclass_json
@dataclass
class RestMethodResponse:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$ref' }})
    

@dataclass_json
@dataclass
class RestMethod:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etagRequired' }})
    flat_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flatPath' }})
    http_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpMethod' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    media_upload: Optional[RestMethodMediaUpload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaUpload' }})
    parameter_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterOrder' }})
    parameters: Optional[dict[str, jsonschema.JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    request: Optional[RestMethodRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    response: Optional[RestMethodResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    supports_media_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsMediaDownload' }})
    supports_media_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsMediaUpload' }})
    supports_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportsSubscription' }})
    use_media_download_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useMediaDownloadService' }})
    
