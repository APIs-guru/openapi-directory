from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePhraseSetRequest:
    r"""CreatePhraseSetRequest
    Message sent by the client for the `CreatePhraseSet` method.
    """
    
    phrase_set: Optional[PhraseSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSet') }})
    phrase_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseSetId') }})
    
