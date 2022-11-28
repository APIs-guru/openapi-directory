from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreditorAgent7Ch:
    r"""CreditorAgent7Ch
    Reference to an creditorAgent by either
      * BIC, of the creditor bank, or
      * IID, of the creditor bank, or
      * IID and optional name and address of the creditor bank or
      * Name and address of the creditor bank
    adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
    
    """
    
    address: Optional[PostalAddress6Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bic') }})
    iid: Optional[InstitutionalIdentification2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
