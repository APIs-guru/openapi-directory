from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import repricingrulecostofgoodssalerule
from . import repricingruleeffectivetime
from . import repricingruleeligibleoffermatcher
from . import repricingrulerestriction
from . import repricingrulestatsbasedrule

class RepricingRuleTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingRule:
    cogs_based_rule: Optional[repricingrulecostofgoodssalerule.RepricingRuleCostOfGoodsSaleRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cogsBasedRule' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    effective_time_period: Optional[repricingruleeffectivetime.RepricingRuleEffectiveTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveTimePeriod' }})
    eligible_offer_matcher: Optional[repricingruleeligibleoffermatcher.RepricingRuleEligibleOfferMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibleOfferMatcher' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paused' }})
    restriction: Optional[repricingrulerestriction.RepricingRuleRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restriction' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleId' }})
    stats_based_rule: Optional[repricingrulestatsbasedrule.RepricingRuleStatsBasedRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statsBasedRule' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[RepricingRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
