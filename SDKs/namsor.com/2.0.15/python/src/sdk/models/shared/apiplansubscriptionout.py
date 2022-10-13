from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIPlanSubscriptionOut:
    api_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKey' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyFactor' }})
    plan_base_fees_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planBaseFeesKey' }})
    plan_ended: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planEnded' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planName' }})
    plan_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planQuota' }})
    plan_started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planStarted' }})
    plan_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planStatus' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_overage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceOverage' }})
    price_overage_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceOverageUSD' }})
    price_usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceUSD' }})
    prior_plan_started: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorPlanStarted' }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeCustomerId' }})
    stripe_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeStatus' }})
    stripe_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeSubscription' }})
    tax_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxRate' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
