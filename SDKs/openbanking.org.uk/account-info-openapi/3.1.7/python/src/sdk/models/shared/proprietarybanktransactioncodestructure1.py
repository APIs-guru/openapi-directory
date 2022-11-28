from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProprietaryBankTransactionCodeStructure1:
    r"""ProprietaryBankTransactionCodeStructure1
    Set of elements to fully identify a proprietary bank transaction code.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Issuer') }})
    
