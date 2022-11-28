from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContainerThreatDetectionSettingsServiceEnablementStateEnum(str, Enum):
    ENABLEMENT_STATE_UNSPECIFIED = "ENABLEMENT_STATE_UNSPECIFIED"
    INHERITED = "INHERITED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class ContainerThreatDetectionSettingsInput:
    r"""ContainerThreatDetectionSettingsInput
    Resource capturing the settings for the Container Threat Detection service.
    """
    
    modules: Optional[dict[str, Config]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modules') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_enablement_state: Optional[ContainerThreatDetectionSettingsServiceEnablementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEnablementState') }})
    

@dataclass_json
@dataclass
class ContainerThreatDetectionSettings:
    r"""ContainerThreatDetectionSettings
    Resource capturing the settings for the Container Threat Detection service.
    """
    
    modules: Optional[dict[str, Config]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modules') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    service_enablement_state: Optional[ContainerThreatDetectionSettingsServiceEnablementStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceEnablementState') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
