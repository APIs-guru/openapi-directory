from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PrimaryAdmin:
    r"""PrimaryAdmin
    JSON template for primary admin in case of TEAM customers
    """
    
    primary_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryEmail') }})
    
