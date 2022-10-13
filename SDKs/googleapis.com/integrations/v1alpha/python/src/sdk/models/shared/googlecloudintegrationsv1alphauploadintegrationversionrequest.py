from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum(str, Enum):
    FILE_FORMAT_UNSPECIFIED = "FILE_FORMAT_UNSPECIFIED"
    JSON = "JSON"
    YAML = "YAML"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    file_format: Optional[GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileFormat' }})
    
