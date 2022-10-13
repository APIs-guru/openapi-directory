from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import contact
from . import contact

class ContactSettingsPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"


@dataclass_json
@dataclass
class ContactSettings:
    admin_contact: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminContact' }})
    privacy: Optional[ContactSettingsPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    registrant_contact: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrantContact' }})
    technical_contact: Optional[contact.Contact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technicalContact' }})
    
