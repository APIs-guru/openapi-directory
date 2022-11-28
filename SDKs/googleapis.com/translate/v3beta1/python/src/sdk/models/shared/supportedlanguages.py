from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SupportedLanguages:
    r"""SupportedLanguages
    The response message for discovering supported languages.
    """
    
    languages: Optional[List[SupportedLanguage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
