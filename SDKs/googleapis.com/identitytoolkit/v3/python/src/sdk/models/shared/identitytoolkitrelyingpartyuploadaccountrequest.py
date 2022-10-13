from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinfo


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyUploadAccountRequest:
    allow_overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOverwrite' }})
    block_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockSize' }})
    cpu_mem_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuMemCost' }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    dk_len: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dkLen' }})
    hash_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashAlgorithm' }})
    memory_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryCost' }})
    parallelization: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parallelization' }})
    rounds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounds' }})
    salt_separator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saltSeparator' }})
    sanity_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sanityCheck' }})
    signer_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signerKey' }})
    target_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProjectId' }})
    users: Optional[List[userinfo.UserInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
