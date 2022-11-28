from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2AllowlistOnly:
    r"""GoogleCloudIdentitytoolkitAdminV2AllowlistOnly
    Defines a policy of only allowing regions by explicitly adding them to an allowlist.
    """
    
    allowed_regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedRegions') }})
    
