from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubstringMatchCriteria:
    r"""SubstringMatchCriteria
    A criteria that matches a specific string of text in the document.
    """
    
    match_case: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchCase') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
