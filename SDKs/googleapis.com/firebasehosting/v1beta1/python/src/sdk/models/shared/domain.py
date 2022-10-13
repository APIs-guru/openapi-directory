from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import domainredirect
from . import domainprovisioning

class DomainStatusEnum(str, Enum):
    DOMAIN_STATUS_UNSPECIFIED = "DOMAIN_STATUS_UNSPECIFIED"
    DOMAIN_CHANGE_PENDING = "DOMAIN_CHANGE_PENDING"
    DOMAIN_ACTIVE = "DOMAIN_ACTIVE"
    DOMAIN_VERIFICATION_REQUIRED = "DOMAIN_VERIFICATION_REQUIRED"
    DOMAIN_VERIFICATION_LOST = "DOMAIN_VERIFICATION_LOST"


@dataclass_json
@dataclass
class Domain:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_redirect: Optional[domainredirect.DomainRedirect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainRedirect' }})
    provisioning: Optional[domainprovisioning.DomainProvisioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioning' }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    status: Optional[DomainStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
