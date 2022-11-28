from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DebtorAgent7Ch:
    r"""DebtorAgent7Ch
    Reference to an debtorAgent by either
      * BIC, of the debtor bank, or
      * IID, of the debtor bank
    adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
    
    """
    
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iid: Optional[InstitutionalIdentification2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iid') }})
    
