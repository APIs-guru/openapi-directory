from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SiteVerificationWebResourceResourceSite:
    r"""SiteVerificationWebResourceResourceSite
    The address and type of a site that is verified or will be verified.
    """
    
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class SiteVerificationWebResourceResource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    owners: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    site: Optional[SiteVerificationWebResourceResourceSite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    
