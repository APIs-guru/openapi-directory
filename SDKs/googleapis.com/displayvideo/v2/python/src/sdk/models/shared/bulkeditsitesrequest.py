from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkEditSitesRequestInput:
    r"""BulkEditSitesRequestInput
    Request message for SiteService.BulkEditSites.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    created_sites: Optional[List[SiteInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdSites') }})
    deleted_sites: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedSites') }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partnerId') }})
    
