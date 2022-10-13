from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1Sentiment:
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'magnitude' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
