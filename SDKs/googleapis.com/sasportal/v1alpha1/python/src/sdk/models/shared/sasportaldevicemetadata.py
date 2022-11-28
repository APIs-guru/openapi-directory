from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalDeviceMetadataInput:
    r"""SasPortalDeviceMetadataInput
    Device data overridable by both SAS Portal and registration requests.
    """
    
    antenna_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaModel') }})
    common_channel_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonChannelGroup') }})
    interference_coordination_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interferenceCoordinationGroup') }})
    nrqz_validation: Optional[SasPortalNrqzValidation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidation') }})
    

@dataclass_json
@dataclass
class SasPortalDeviceMetadata:
    r"""SasPortalDeviceMetadata
    Device data overridable by both SAS Portal and registration requests.
    """
    
    antenna_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antennaModel') }})
    common_channel_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonChannelGroup') }})
    interference_coordination_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interferenceCoordinationGroup') }})
    nrqz_validated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidated') }})
    nrqz_validation: Optional[SasPortalNrqzValidation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nrqzValidation') }})
    
