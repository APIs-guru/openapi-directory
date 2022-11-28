from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaMerchantCenterLink:
    r"""GoogleCloudRetailV2betaMerchantCenterLink
    Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.
    """
    
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchId') }})
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinations') }})
    feeds: Optional[List[GoogleCloudRetailV2betaMerchantCenterFeedFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeds') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    merchant_center_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCenterAccountId') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
