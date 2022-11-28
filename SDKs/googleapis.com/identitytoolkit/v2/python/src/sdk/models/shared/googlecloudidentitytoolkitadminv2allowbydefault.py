from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2AllowByDefault:
    r"""GoogleCloudIdentitytoolkitAdminV2AllowByDefault
    Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
    """
    
    disallowed_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowedRegions') }})
    
