from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LdapsSettingsStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class LdapsSettingsInput:
    r"""LdapsSettingsInput
    LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
    """
    
    certificate: Optional[Certificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    certificate_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePassword') }})
    certificate_pfx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePfx') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class LdapsSettings:
    r"""LdapsSettings
    LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
    """
    
    certificate: Optional[Certificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    certificate_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePassword') }})
    certificate_pfx: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePfx') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[LdapsSettingsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
