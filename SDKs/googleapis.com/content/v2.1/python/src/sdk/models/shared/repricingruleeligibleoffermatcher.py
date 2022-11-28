from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RepricingRuleEligibleOfferMatcherMatcherOptionEnum(str, Enum):
    MATCHER_OPTION_UNSPECIFIED = "MATCHER_OPTION_UNSPECIFIED"
    MATCHER_OPTION_CUSTOM_FILTER = "MATCHER_OPTION_CUSTOM_FILTER"
    MATCHER_OPTION_USE_FEED_ATTRIBUTE = "MATCHER_OPTION_USE_FEED_ATTRIBUTE"
    MATCHER_OPTION_ALL_PRODUCTS = "MATCHER_OPTION_ALL_PRODUCTS"


@dataclass_json
@dataclass
class RepricingRuleEligibleOfferMatcher:
    r"""RepricingRuleEligibleOfferMatcher
    Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.
    """
    
    brand_matcher: Optional[RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandMatcher') }})
    item_group_id_matcher: Optional[RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupIdMatcher') }})
    matcher_option: Optional[RepricingRuleEligibleOfferMatcherMatcherOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matcherOption') }})
    offer_id_matcher: Optional[RepricingRuleEligibleOfferMatcherStringMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerIdMatcher') }})
    skip_when_on_promotion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipWhenOnPromotion') }})
    
