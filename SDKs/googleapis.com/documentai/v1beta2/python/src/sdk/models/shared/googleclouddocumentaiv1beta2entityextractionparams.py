from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2EntityExtractionParams:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelVersion' }})
    
