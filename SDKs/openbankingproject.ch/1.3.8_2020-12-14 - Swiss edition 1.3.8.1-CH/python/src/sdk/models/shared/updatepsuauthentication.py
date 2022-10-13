from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import psudata


@dataclass_json
@dataclass
class UpdatePsuAuthentication:
    psu_data: psudata.PsuData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuData' }})
    
