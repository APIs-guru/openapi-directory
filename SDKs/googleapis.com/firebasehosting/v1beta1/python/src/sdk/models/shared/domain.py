from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DomainStatusEnum(str, Enum):
    DOMAIN_STATUS_UNSPECIFIED = "DOMAIN_STATUS_UNSPECIFIED"
    DOMAIN_CHANGE_PENDING = "DOMAIN_CHANGE_PENDING"
    DOMAIN_ACTIVE = "DOMAIN_ACTIVE"
    DOMAIN_VERIFICATION_REQUIRED = "DOMAIN_VERIFICATION_REQUIRED"
    DOMAIN_VERIFICATION_LOST = "DOMAIN_VERIFICATION_LOST"


@dataclass_json
@dataclass
class Domain:
    r"""Domain
    The intended behavior and status information of a domain.
    """
    
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    domain_redirect: Optional[DomainRedirect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainRedirect') }})
    provisioning: Optional[DomainProvisioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioning') }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    status: Optional[DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
