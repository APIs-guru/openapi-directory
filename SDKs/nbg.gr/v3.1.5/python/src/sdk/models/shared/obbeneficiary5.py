from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import obbeneficiarytype1code_enum
from . import obcashaccount5


@dataclass_json
@dataclass
class ObBeneficiary5:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    beneficiary_type: Optional[obbeneficiarytype1code_enum.ObBeneficiaryType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeneficiaryType' }})
    creditor_account: Optional[obcashaccount5.ObCashAccount5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    
