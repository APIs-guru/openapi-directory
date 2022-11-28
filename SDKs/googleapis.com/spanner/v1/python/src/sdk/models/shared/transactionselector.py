from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionSelector:
    r"""TransactionSelector
    This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
    """
    
    begin: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('begin') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    single_use: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUse') }})
    
