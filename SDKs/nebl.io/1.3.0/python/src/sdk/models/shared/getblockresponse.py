from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetBlockResponse:
    bits: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bits') }})
    confirmations: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confirmations') }})
    difficulty: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('difficulty') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    merkleroot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merkleroot') }})
    nextblockhash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextblockhash') }})
    nonce: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonce') }})
    previousblockhash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousblockhash') }})
    reward: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reward') }})
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    tx: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tx') }})
    version: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
