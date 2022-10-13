from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import conferenceparametersaddonparameters


@dataclass_json
@dataclass
class ConferenceParameters:
    add_on_parameters: Optional[conferenceparametersaddonparameters.ConferenceParametersAddOnParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOnParameters' }})
    
