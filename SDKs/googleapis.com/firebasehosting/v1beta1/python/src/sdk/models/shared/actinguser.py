from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActingUser:
    r"""ActingUser
    Contains metadata about the user who performed an action, such as creating a release or finalizing a version.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    
