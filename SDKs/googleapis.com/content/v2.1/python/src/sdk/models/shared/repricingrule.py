from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RepricingRuleTypeEnum(str, Enum):
    REPRICING_RULE_TYPE_UNSPECIFIED = "REPRICING_RULE_TYPE_UNSPECIFIED"
    TYPE_STATS_BASED = "TYPE_STATS_BASED"
    TYPE_COGS_BASED = "TYPE_COGS_BASED"
    TYPE_SALES_VOLUME_BASED = "TYPE_SALES_VOLUME_BASED"
    TYPE_COMPETITIVE_PRICE = "TYPE_COMPETITIVE_PRICE"


@dataclass_json
@dataclass
class RepricingRuleInput:
    r"""RepricingRuleInput
    Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
    """
    
    cogs_based_rule: Optional[RepricingRuleCostOfGoodsSaleRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cogsBasedRule') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    effective_time_period: Optional[RepricingRuleEffectiveTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTimePeriod') }})
    eligible_offer_matcher: Optional[RepricingRuleEligibleOfferMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibleOfferMatcher') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    restriction: Optional[RepricingRuleRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restriction') }})
    stats_based_rule: Optional[RepricingRuleStatsBasedRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statsBasedRule') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[RepricingRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class RepricingRule:
    r"""RepricingRule
    Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met. Next ID: 24
    """
    
    cogs_based_rule: Optional[RepricingRuleCostOfGoodsSaleRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cogsBasedRule') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    effective_time_period: Optional[RepricingRuleEffectiveTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTimePeriod') }})
    eligible_offer_matcher: Optional[RepricingRuleEligibleOfferMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibleOfferMatcher') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    restriction: Optional[RepricingRuleRestriction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restriction') }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleId') }})
    stats_based_rule: Optional[RepricingRuleStatsBasedRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statsBasedRule') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[RepricingRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
