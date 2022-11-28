from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Name:
    r"""Name
    2-letter ISO 639-1 language code for the corresponding item.
    """
    
    dollar_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$') }})
    at_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@LanguageCode') }})
    
