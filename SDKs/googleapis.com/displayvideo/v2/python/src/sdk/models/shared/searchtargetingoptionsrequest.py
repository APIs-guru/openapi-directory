from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchTargetingOptionsRequest:
    r"""SearchTargetingOptionsRequest
    Request message for SearchTargetingOptions.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    business_chain_search_terms: Optional[BusinessChainSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChainSearchTerms') }})
    geo_region_search_terms: Optional[GeoRegionSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionSearchTerms') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    poi_search_terms: Optional[PoiSearchTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiSearchTerms') }})
    
