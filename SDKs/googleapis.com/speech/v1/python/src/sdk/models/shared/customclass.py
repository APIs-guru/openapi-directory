from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomClass:
    r"""CustomClass
    A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases.
    """
    
    custom_class_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClassId') }})
    items: Optional[List[ClassItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
