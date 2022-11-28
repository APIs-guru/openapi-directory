from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Tenant:
    r"""Tenant
    A Tenant resource represents a tenant in the service. A tenant is a group or entity that shares common access with specific privileges for resources like jobs. Customer may create multiple tenants to provide data isolation for different groups.
    """
    
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
