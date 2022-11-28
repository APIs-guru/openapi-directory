from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendTokenResponse:
    multisig_outputs: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multisigOutputs') }})
    ntp1_output_indexes: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ntp1OutputIndexes') }})
    tx_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('txHex') }})
    
