from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Organization:
    r"""Organization
    Represents an organization that can access a custom app.
    """
    
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    
