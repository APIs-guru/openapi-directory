from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeSyntaxResponse:
    r"""AnalyzeSyntaxResponse
    The syntax analysis response message.
    """
    
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentences: Optional[List[Sentence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentences') }})
    tokens: Optional[List[Token]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokens') }})
    
