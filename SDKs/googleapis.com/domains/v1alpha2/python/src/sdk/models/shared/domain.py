from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DomainResourceStateEnum(str, Enum):
    RESOURCE_STATE_UNSPECIFIED = "RESOURCE_STATE_UNSPECIFIED"
    IMPORTABLE = "IMPORTABLE"
    UNSUPPORTED = "UNSUPPORTED"
    SUSPENDED = "SUSPENDED"
    EXPIRED = "EXPIRED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Domain:
    r"""Domain
    A domain that the calling user manages in Google Domains.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    resource_state: Optional[DomainResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceState') }})
    yearly_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    
