from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TenancyUnit:
    r"""TenancyUnit
    Representation of a tenancy unit.
    """
    
    consumer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumer') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    tenant_resources: Optional[List[TenantResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantResources') }})
    
