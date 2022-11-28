from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum(str, Enum):
    FILE_FORMAT_UNSPECIFIED = "FILE_FORMAT_UNSPECIFIED"
    JSON = "JSON"
    YAML = "YAML"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest:
    r"""GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest
    Request for UploadIntegrationVersion.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    file_format: Optional[GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileFormat') }})
    
