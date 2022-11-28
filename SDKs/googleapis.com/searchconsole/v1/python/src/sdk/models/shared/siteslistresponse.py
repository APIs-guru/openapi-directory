from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SitesListResponse:
    r"""SitesListResponse
    List of sites with access level information.
    """
    
    site_entry: Optional[List[WmxSite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteEntry') }})
    
