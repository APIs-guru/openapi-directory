from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ObBeneficiary5:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    beneficiary_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeneficiaryId') }})
    beneficiary_type: Optional[ObBeneficiaryType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BeneficiaryType') }})
    creditor_account: Optional[ObCashAccount50] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAccount') }})
    creditor_agent: Optional[ObBranchAndFinancialInstitutionIdentification60] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreditorAgent') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reference') }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupplementaryData') }})
    
