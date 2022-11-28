from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sentence:
    r"""Sentence
    Represents a sentence in the input document.
    """
    
    sentiment: Optional[Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    text: Optional[TextSpan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
