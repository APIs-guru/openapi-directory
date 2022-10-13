from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentOutputConfig:
    gcs_output_config: Optional[googleclouddocumentaiv1beta3documentoutputconfiggcsoutputconfig.GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsOutputConfig' }})
    
