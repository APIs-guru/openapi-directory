from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaAccessTuple:
    r"""GoogleCloudPolicytroubleshooterV1betaAccessTuple
    Information about the member, resource, and permission to check.
    """
    
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    
