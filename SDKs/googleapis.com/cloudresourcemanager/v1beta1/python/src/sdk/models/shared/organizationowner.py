from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrganizationOwner:
    r"""OrganizationOwner
    The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted.
    """
    
    directory_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directoryCustomerId') }})
    
