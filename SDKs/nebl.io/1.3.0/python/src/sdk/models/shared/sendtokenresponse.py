from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendTokenResponse:
    multisig_outputs: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multisigOutputs' }})
    ntp1_output_indexes: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ntp1OutputIndexes' }})
    tx_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txHex' }})
    
