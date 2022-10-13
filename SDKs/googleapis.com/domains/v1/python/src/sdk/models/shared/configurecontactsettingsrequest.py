from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactsettings

class ConfigureContactSettingsRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"


@dataclass_json
@dataclass
class ConfigureContactSettingsRequest:
    contact_notices: Optional[List[ConfigureContactSettingsRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactNotices' }})
    contact_settings: Optional[contactsettings.ContactSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactSettings' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
