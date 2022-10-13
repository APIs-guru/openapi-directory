from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import challengedata
from . import chosenscamethod
from . import amount
from . import amount
from . import amount
from . import authenticationobject
from . import tppmessage2xx
from . import amount
from . import transactionstatus_enum


@dataclass_json
@dataclass
class PaymentInitationRequestResponse201:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    currency_conversion_fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyConversionFee' }})
    estimated_interbank_settlement_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedInterbankSettlementAmount' }})
    estimated_total_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTotalAmount' }})
    payment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentId' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    tpp_messages: Optional[List[tppmessage2xx.TppMessage2Xx]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    transaction_fee_indicator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionFeeIndicator' }})
    transaction_fees: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionFees' }})
    transaction_status: transactionstatus_enum.TransactionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
