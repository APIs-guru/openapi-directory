from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LanguagesListResponse:
    r"""LanguagesListResponse
    Language List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    languages: Optional[List[Language]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languages') }})
    
