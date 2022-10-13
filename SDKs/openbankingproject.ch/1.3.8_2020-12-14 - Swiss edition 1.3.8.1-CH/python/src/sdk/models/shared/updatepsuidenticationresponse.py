from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import amount
from . import amount
from . import amount
from . import authenticationobject
from . import scastatus_enum
from . import amount


@dataclass_json
@dataclass
class UpdatePsuIdenticationResponse:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    currency_conversion_fees: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyConversionFees' }})
    estimated_interbank_settlement_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedInterbankSettlementAmount' }})
    estimated_total_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTotalAmount' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    sca_status: scastatus_enum.ScaStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    transaction_fees: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionFees' }})
    
