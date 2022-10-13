from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnnotationsSummaryLayers:
    allowed_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedCharacterCount' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerId' }})
    limit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitType' }})
    remaining_character_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCharacterCount' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass_json
@dataclass
class AnnotationsSummary:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    layers: Optional[List[AnnotationsSummaryLayers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layers' }})
    
