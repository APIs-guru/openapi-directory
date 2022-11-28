from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HsAlgoSettings:
    r"""HsAlgoSettings
    Settings for an HMAC + SHA signing algorithm
    """
    
    secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
