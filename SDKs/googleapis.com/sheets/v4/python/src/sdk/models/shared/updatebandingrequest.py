from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bandedrange


@dataclass_json
@dataclass
class UpdateBandingRequest:
    banded_range: Optional[bandedrange.BandedRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bandedRange' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    
