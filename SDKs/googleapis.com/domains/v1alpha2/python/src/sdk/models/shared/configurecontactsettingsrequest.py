from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigureContactSettingsRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"


@dataclass_json
@dataclass
class ConfigureContactSettingsRequest:
    r"""ConfigureContactSettingsRequest
    Request for the `ConfigureContactSettings` method.
    """
    
    contact_notices: Optional[List[ConfigureContactSettingsRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactNotices') }})
    contact_settings: Optional[ContactSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactSettings') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
