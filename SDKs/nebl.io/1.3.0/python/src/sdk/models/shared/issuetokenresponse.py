from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueTokenResponse:
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    tx_hex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txHex' }})
    
