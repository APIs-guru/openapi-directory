from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betamerchantcenterfeedfilter


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaMerchantCenterLink:
    branch_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branchId' }})
    destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    feeds: Optional[List[googlecloudretailv2betamerchantcenterfeedfilter.GoogleCloudRetailV2betaMerchantCenterFeedFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeds' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    merchant_center_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCenterAccountId' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
