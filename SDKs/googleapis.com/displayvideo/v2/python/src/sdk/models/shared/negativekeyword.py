from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NegativeKeyword:
    r"""NegativeKeyword
    A negatively targeted keyword that belongs to a negative keyword list.
    """
    
    keyword_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordValue') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class NegativeKeywordInput:
    r"""NegativeKeywordInput
    A negatively targeted keyword that belongs to a negative keyword list.
    """
    
    keyword_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywordValue') }})
    
