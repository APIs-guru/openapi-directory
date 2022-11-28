from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAdsHomeservicesLocalservicesV1AccountReport:
    r"""GoogleAdsHomeservicesLocalservicesV1AccountReport
    An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    aggregator_info: Optional[GoogleAdsHomeservicesLocalservicesV1AggregatorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregatorInfo') }})
    average_five_star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageFiveStarRating') }})
    average_weekly_budget: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageWeeklyBudget') }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessName') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    current_period_charged_leads: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodChargedLeads') }})
    current_period_connected_phone_calls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodConnectedPhoneCalls') }})
    current_period_phone_calls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodPhoneCalls') }})
    current_period_total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodTotalCost') }})
    impressions_last_two_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionsLastTwoDays') }})
    phone_lead_responsiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneLeadResponsiveness') }})
    previous_period_charged_leads: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPeriodChargedLeads') }})
    previous_period_connected_phone_calls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPeriodConnectedPhoneCalls') }})
    previous_period_phone_calls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPeriodPhoneCalls') }})
    previous_period_total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousPeriodTotalCost') }})
    total_review: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalReview') }})
    
