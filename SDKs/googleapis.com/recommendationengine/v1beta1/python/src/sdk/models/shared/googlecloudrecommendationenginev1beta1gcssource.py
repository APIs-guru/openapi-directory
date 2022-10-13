from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommendationengineV1beta1GcsSource:
    input_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputUris' }})
    json_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jsonSchema' }})
    
