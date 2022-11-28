from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SynthesisInput:
    r"""SynthesisInput
    Contains text input to be synthesized. Either `text` or `ssml` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000 characters.
    """
    
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssml') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
