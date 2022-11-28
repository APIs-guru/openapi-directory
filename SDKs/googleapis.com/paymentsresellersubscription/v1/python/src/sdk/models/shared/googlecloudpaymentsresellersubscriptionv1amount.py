from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudPaymentsResellerSubscriptionV1Amount:
    r"""GoogleCloudPaymentsResellerSubscriptionV1Amount
    Describes the amount unit including the currency code.
    """
    
    amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    
