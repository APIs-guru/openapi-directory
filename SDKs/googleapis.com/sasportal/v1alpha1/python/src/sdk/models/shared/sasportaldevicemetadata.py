from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sasportalnrqzvalidation


@dataclass_json
@dataclass
class SasPortalDeviceMetadata:
    antenna_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'antennaModel' }})
    common_channel_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonChannelGroup' }})
    interference_coordination_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interferenceCoordinationGroup' }})
    nrqz_validated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nrqzValidated' }})
    nrqz_validation: Optional[sasportalnrqzvalidation.SasPortalNrqzValidation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nrqzValidation' }})
    
