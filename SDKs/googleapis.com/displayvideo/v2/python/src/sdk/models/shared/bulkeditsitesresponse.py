from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditSitesResponse:
    r"""BulkEditSitesResponse
    Response message for SiteService.BulkEditSites.
    """
    
    sites: Optional[List[Site]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    
