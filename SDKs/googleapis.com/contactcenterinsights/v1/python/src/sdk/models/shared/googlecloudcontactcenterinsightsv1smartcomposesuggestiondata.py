from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData:
    confidence_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceScore' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    query_record: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryRecord' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
