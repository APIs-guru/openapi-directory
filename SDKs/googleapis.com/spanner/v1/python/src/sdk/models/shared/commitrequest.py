from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitRequest:
    r"""CommitRequest
    The request for Commit.
    """
    
    mutations: Optional[List[Mutation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutations') }})
    request_options: Optional[RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestOptions') }})
    return_commit_stats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnCommitStats') }})
    single_use_transaction: Optional[TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleUseTransaction') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
