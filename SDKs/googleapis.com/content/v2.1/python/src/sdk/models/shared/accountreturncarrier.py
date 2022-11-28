from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountReturnCarrierCarrierCodeEnum(str, Enum):
    CARRIER_CODE_UNSPECIFIED = "CARRIER_CODE_UNSPECIFIED"
    FEDEX = "FEDEX"
    UPS = "UPS"


@dataclass_json
@dataclass
class AccountReturnCarrierInput:
    r"""AccountReturnCarrierInput
     The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 
    """
    
    carrier_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAccountName') }})
    carrier_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAccountNumber') }})
    carrier_code: Optional[AccountReturnCarrierCarrierCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierCode') }})
    

@dataclass_json
@dataclass
class AccountReturnCarrier:
    r"""AccountReturnCarrier
     The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 
    """
    
    carrier_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAccountId') }})
    carrier_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAccountName') }})
    carrier_account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierAccountNumber') }})
    carrier_code: Optional[AccountReturnCarrierCarrierCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierCode') }})
    
