from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceFeesInputModel:
    cancellation_fee_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationFeeAmount') }})
    cancellation_fee_taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationFeeTaxable') }})
    fee_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeAmount') }})
    fee_taxable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feeTaxable') }})
    non_refundable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonRefundable') }})
    
