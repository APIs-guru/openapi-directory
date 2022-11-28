from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvertiserAndBrand:
    r"""AdvertiserAndBrand
    Detected advertiser and brand information.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserName') }})
    brand_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandId') }})
    brand_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    
