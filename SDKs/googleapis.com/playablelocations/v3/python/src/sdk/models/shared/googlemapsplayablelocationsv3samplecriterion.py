from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlemapsplayablelocationsv3samplefilter


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleCriterion:
    fields_to_return: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsToReturn' }})
    filter: Optional[googlemapsplayablelocationsv3samplefilter.GoogleMapsPlayablelocationsV3SampleFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    game_object_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameObjectType' }})
    
