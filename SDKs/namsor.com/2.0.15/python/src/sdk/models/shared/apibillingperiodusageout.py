from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIBillingPeriodUsageOut:
    r"""APIBillingPeriodUsageOut
    The current billing period.
    """
    
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    billing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingStatus') }})
    hard_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardLimit') }})
    period_ended: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodEnded') }})
    period_started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('periodStarted') }})
    soft_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softLimit') }})
    stripe_current_period_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripeCurrentPeriodEnd') }})
    stripe_current_period_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripeCurrentPeriodStart') }})
    subscription_started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionStarted') }})
    usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    
