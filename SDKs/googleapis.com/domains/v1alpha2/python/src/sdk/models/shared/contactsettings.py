from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ContactSettingsPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"


@dataclass_json
@dataclass
class ContactSettings:
    r"""ContactSettings
    Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
    """
    
    admin_contact: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminContact') }})
    privacy: Optional[ContactSettingsPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    registrant_contact: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrantContact') }})
    technical_contact: Optional[Contact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technicalContact') }})
    
