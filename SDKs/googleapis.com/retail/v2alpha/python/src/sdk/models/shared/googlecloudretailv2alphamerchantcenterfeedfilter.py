from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaMerchantCenterFeedFilter:
    r"""GoogleCloudRetailV2alphaMerchantCenterFeedFilter
    Merchant Center Feed filter criterion.
    """
    
    primary_feed_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryFeedId') }})
    primary_feed_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryFeedName') }})
    
