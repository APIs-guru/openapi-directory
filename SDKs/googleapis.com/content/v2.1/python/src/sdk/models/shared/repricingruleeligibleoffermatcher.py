from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import repricingruleeligibleoffermatcherstringmatcher
from . import repricingruleeligibleoffermatcherstringmatcher
from . import repricingruleeligibleoffermatcherstringmatcher

class RepricingRuleEligibleOfferMatcherMatcherOptionEnum(str, Enum):
    MATCHER_OPTION_UNSPECIFIED = "MATCHER_OPTION_UNSPECIFIED"
    MATCHER_OPTION_CUSTOM_FILTER = "MATCHER_OPTION_CUSTOM_FILTER"
    MATCHER_OPTION_USE_FEED_ATTRIBUTE = "MATCHER_OPTION_USE_FEED_ATTRIBUTE"
    MATCHER_OPTION_ALL_PRODUCTS = "MATCHER_OPTION_ALL_PRODUCTS"


@dataclass_json
@dataclass
class RepricingRuleEligibleOfferMatcher:
    brand_matcher: Optional[repricingruleeligibleoffermatcherstringmatcher.RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandMatcher' }})
    item_group_id_matcher: Optional[repricingruleeligibleoffermatcherstringmatcher.RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupIdMatcher' }})
    matcher_option: Optional[RepricingRuleEligibleOfferMatcherMatcherOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matcherOption' }})
    offer_id_matcher: Optional[repricingruleeligibleoffermatcherstringmatcher.RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerIdMatcher' }})
    skip_when_on_promotion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipWhenOnPromotion' }})
    
