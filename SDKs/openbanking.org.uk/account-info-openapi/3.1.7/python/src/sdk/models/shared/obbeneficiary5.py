from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import obbeneficiarytype1code_enum
from . import obcashaccount5_0
from . import obbranchandfinancialinstitutionidentification6_0


@dataclass_json
@dataclass
class ObBeneficiary5:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    beneficiary_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeneficiaryId' }})
    beneficiary_type: Optional[obbeneficiarytype1code_enum.ObBeneficiaryType1CodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BeneficiaryType' }})
    creditor_account: Optional[obcashaccount5_0.ObCashAccount50] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAccount' }})
    creditor_agent: Optional[obbranchandfinancialinstitutionidentification6_0.ObBranchAndFinancialInstitutionIdentification60] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreditorAgent' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reference' }})
    supplementary_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupplementaryData' }})
    
