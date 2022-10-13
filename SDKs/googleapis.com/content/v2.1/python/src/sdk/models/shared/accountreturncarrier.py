from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountReturnCarrierCarrierCodeEnum(str, Enum):
    CARRIER_CODE_UNSPECIFIED = "CARRIER_CODE_UNSPECIFIED"
    FEDEX = "FEDEX"
    UPS = "UPS"


@dataclass_json
@dataclass
class AccountReturnCarrier:
    carrier_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierAccountId' }})
    carrier_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierAccountName' }})
    carrier_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierAccountNumber' }})
    carrier_code: Optional[AccountReturnCarrierCarrierCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierCode' }})
    
