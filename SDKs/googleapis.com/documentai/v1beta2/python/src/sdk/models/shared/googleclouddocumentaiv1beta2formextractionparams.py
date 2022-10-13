from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2keyvaluepairhint


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2FormExtractionParams:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    key_value_pair_hints: Optional[List[googleclouddocumentaiv1beta2keyvaluepairhint.GoogleCloudDocumentaiV1beta2KeyValuePairHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValuePairHints' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelVersion' }})
    
