from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import challengedata
from . import chosenscamethod
from . import amount
from . import amount
from . import amount
from . import scastatus_enum
from . import amount


@dataclass_json
@dataclass
class SelectPsuAuthenticationMethodResponse:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    currency_conversion_fees: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyConversionFees' }})
    estimated_interbank_settlement_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedInterbankSettlementAmount' }})
    estimated_total_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTotalAmount' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_status: scastatus_enum.ScaStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    transaction_fees: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionFees' }})
    
