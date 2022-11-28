from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TagConsentSettingConsentStatusEnum(str, Enum):
    NOT_SET = "notSet"
    NOT_NEEDED = "notNeeded"
    NEEDED = "needed"


@dataclass_json
@dataclass
class TagConsentSetting:
    consent_status: Optional[TagConsentSettingConsentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    consent_type: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentType') }})
    
