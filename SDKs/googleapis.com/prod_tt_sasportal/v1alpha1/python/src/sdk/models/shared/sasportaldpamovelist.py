from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sasportalfrequencyrange


@dataclass_json
@dataclass
class SasPortalDpaMoveList:
    dpa_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpaId' }})
    frequency_range: Optional[sasportalfrequencyrange.SasPortalFrequencyRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyRange' }})
    
