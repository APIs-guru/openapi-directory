from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Sentiment:
    r"""Sentiment
    Represents the feeling associated with the entire text or entities in the text.
    """
    
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magnitude') }})
    polarity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('polarity') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
