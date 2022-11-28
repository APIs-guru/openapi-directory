from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class S3CompatibleMetadataAuthMethodEnum(str, Enum):
    AUTH_METHOD_UNSPECIFIED = "AUTH_METHOD_UNSPECIFIED"
    AUTH_METHOD_AWS_SIGNATURE_V4 = "AUTH_METHOD_AWS_SIGNATURE_V4"
    AUTH_METHOD_AWS_SIGNATURE_V2 = "AUTH_METHOD_AWS_SIGNATURE_V2"

class S3CompatibleMetadataListAPIEnum(str, Enum):
    LIST_API_UNSPECIFIED = "LIST_API_UNSPECIFIED"
    LIST_OBJECTS_V2 = "LIST_OBJECTS_V2"
    LIST_OBJECTS = "LIST_OBJECTS"

class S3CompatibleMetadataProtocolEnum(str, Enum):
    NETWORK_PROTOCOL_UNSPECIFIED = "NETWORK_PROTOCOL_UNSPECIFIED"
    NETWORK_PROTOCOL_HTTPS = "NETWORK_PROTOCOL_HTTPS"
    NETWORK_PROTOCOL_HTTP = "NETWORK_PROTOCOL_HTTP"

class S3CompatibleMetadataRequestModelEnum(str, Enum):
    REQUEST_MODEL_UNSPECIFIED = "REQUEST_MODEL_UNSPECIFIED"
    REQUEST_MODEL_VIRTUAL_HOSTED_STYLE = "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE"
    REQUEST_MODEL_PATH_STYLE = "REQUEST_MODEL_PATH_STYLE"


@dataclass_json
@dataclass
class S3CompatibleMetadata:
    r"""S3CompatibleMetadata
    S3CompatibleMetadata contains the metadata fields that apply to the basic types of S3-compatible data providers.
    """
    
    auth_method: Optional[S3CompatibleMetadataAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMethod') }})
    list_api: Optional[S3CompatibleMetadataListAPIEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listApi') }})
    protocol: Optional[S3CompatibleMetadataProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    request_model: Optional[S3CompatibleMetadataRequestModelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestModel') }})
    
