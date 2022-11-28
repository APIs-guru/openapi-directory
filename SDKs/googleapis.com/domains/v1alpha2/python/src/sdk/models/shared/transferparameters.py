from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransferParametersSupportedPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"

class TransferParametersTransferLockStateEnum(str, Enum):
    TRANSFER_LOCK_STATE_UNSPECIFIED = "TRANSFER_LOCK_STATE_UNSPECIFIED"
    UNLOCKED = "UNLOCKED"
    LOCKED = "LOCKED"


@dataclass_json
@dataclass
class TransferParameters:
    r"""TransferParameters
    Parameters required to transfer a domain from another registrar.
    """
    
    current_registrar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRegistrar') }})
    current_registrar_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentRegistrarUri') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    name_servers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameServers') }})
    supported_privacy: Optional[List[TransferParametersSupportedPrivacyEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportedPrivacy') }})
    transfer_lock_state: Optional[TransferParametersTransferLockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferLockState') }})
    yearly_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
