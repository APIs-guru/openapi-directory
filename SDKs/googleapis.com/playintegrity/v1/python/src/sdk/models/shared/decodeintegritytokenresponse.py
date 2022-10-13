from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tokenpayloadexternal


@dataclass_json
@dataclass
class DecodeIntegrityTokenResponse:
    token_payload_external: Optional[tokenpayloadexternal.TokenPayloadExternal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenPayloadExternal' }})
    
