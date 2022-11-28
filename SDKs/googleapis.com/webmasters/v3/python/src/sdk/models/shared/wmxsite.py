from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WmxSite:
    r"""WmxSite
    Contains permission level information about a Search Console site. For more information, see  Permissions in Search Console.
    """
    
    permission_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionLevel') }})
    site_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteUrl') }})
    
