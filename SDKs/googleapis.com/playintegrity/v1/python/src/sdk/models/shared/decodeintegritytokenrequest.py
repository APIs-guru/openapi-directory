from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DecodeIntegrityTokenRequest:
    r"""DecodeIntegrityTokenRequest
    Request to decode the integrity token.
    """
    
    integrity_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrityToken') }})
    
