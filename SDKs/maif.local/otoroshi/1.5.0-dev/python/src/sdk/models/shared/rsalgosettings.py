from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RsAlgoSettings:
    r"""RsAlgoSettings
    Settings for an HMAC + SHA signing algorithm
    """
    
    public_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    
