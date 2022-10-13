from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentoutputconfiggcsoutputconfig


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentOutputConfig:
    gcs_output_config: Optional[googleclouddocumentaiv1documentoutputconfiggcsoutputconfig.GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsOutputConfig' }})
    
