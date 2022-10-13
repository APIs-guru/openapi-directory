from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parameter

class TagConsentSettingConsentStatusEnum(str, Enum):
    NOT_SET = "notSet"
    NOT_NEEDED = "notNeeded"
    NEEDED = "needed"


@dataclass_json
@dataclass
class TagConsentSetting:
    consent_status: Optional[TagConsentSettingConsentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentStatus' }})
    consent_type: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentType' }})
    
