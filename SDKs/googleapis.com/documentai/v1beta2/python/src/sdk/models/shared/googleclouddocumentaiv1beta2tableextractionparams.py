from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta2tableboundhint


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2TableExtractionParams:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    header_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerHints' }})
    model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelVersion' }})
    table_bound_hints: Optional[List[googleclouddocumentaiv1beta2tableboundhint.GoogleCloudDocumentaiV1beta2TableBoundHint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableBoundHints' }})
    
