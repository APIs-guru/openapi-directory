from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1SustainabilityProjection:
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    kg_co2e: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kgCO2e' }})
    
