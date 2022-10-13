from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mutation
from . import requestoptions
from . import transactionoptions


@dataclass_json
@dataclass
class CommitRequest:
    mutations: Optional[List[mutation.Mutation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutations' }})
    request_options: Optional[requestoptions.RequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestOptions' }})
    return_commit_stats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnCommitStats' }})
    single_use_transaction: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleUseTransaction' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
