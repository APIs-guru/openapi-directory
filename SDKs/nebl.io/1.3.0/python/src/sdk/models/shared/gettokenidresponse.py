from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTokenIDResponse:
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenId' }})
    token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenName' }})
    
