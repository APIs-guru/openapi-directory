from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SelectPsuAuthenticationMethodResponse:
    r"""SelectPsuAuthenticationMethodResponse
    Body of the JSON response for a successful select PSU authentication method request.
    """
    
    sca_status: ScaStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    challenge_data: Optional[ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    currency_conversion_fees: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyConversionFees') }})
    estimated_interbank_settlement_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedInterbankSettlementAmount') }})
    estimated_total_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTotalAmount') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    transaction_fees: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionFees') }})
    
