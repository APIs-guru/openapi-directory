from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pulsemcqoption
from . import pulsespatialoption


@dataclass_json
@dataclass
class PulseAnswer:
    multi_choice_answer: Optional[List[pulsemcqoption.PulseMcqOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiChoiceAnswer' }})
    spatial_answer: Optional[List[pulsespatialoption.PulseSpatialOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spatialAnswer' }})
    text_answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnswer' }})
    
