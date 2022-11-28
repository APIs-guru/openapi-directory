from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DecodeIntegrityTokenResponse:
    r"""DecodeIntegrityTokenResponse
    Response containing the decoded integrity payload.
    """
    
    token_payload_external: Optional[TokenPayloadExternal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenPayloadExternal') }})
    
