from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sasportalfrequencyrange


@dataclass_json
@dataclass
class SasPortalChannelWithScore:
    frequency_range: Optional[sasportalfrequencyrange.SasPortalFrequencyRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyRange' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
