from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1DialogflowInteractionData:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    dialogflow_intent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowIntentId' }})
    
