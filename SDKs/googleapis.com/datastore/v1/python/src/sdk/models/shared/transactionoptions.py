from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionOptions:
    r"""TransactionOptions
    Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
    """
    
    read_only: Optional[ReadOnly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    read_write: Optional[ReadWrite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readWrite') }})
    
