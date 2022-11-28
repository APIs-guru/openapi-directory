from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyUploadAccountRequest:
    r"""IdentitytoolkitRelyingpartyUploadAccountRequest
    Request to upload user account in batch.
    """
    
    allow_overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowOverwrite') }})
    block_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockSize') }})
    cpu_mem_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuMemCost') }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegatedProjectNumber') }})
    dk_len: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dkLen') }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashAlgorithm') }})
    memory_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryCost') }})
    parallelization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelization') }})
    rounds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rounds') }})
    salt_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saltSeparator') }})
    sanity_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sanityCheck') }})
    signer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signerKey') }})
    target_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetProjectId') }})
    users: Optional[List[UserInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
