from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentInitationRequestResponse201:
    r"""PaymentInitationRequestResponse201
    Body of the response for a successful payment initiation request.
    """
    
    links: dict[str, HrefType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentId') }})
    transaction_status: TransactionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    challenge_data: Optional[ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    currency_conversion_fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyConversionFee') }})
    estimated_interbank_settlement_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedInterbankSettlementAmount') }})
    estimated_total_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTotalAmount') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[List[AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    tpp_messages: Optional[List[TppMessage2Xx]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    transaction_fee_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionFeeIndicator') }})
    transaction_fees: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionFees') }})
    
