from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObCashAccount61:
    r"""ObCashAccount61
    Unambiguous identification of the account of the debtor, in the case of a crebit transaction.
    """
    
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    scheme_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemeName') }})
    secondary_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryIdentification') }})
    
