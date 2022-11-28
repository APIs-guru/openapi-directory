from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PhraseSet:
    r"""PhraseSet
    Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.
    """
    
    boost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boost') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phrases: Optional[List[Phrase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phrases') }})
    
