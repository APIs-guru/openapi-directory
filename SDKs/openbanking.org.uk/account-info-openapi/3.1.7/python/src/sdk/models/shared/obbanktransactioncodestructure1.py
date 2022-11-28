from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObBankTransactionCodeStructure1:
    r"""ObBankTransactionCodeStructure1
    Set of elements used to fully identify the type of underlying transaction resulting in an entry.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }})
    sub_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubCode') }})
    
