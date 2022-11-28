from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GamesNumberAffixConfiguration:
    r"""GamesNumberAffixConfiguration
    A number affix resource.
    """
    
    few: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('few') }})
    many: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('many') }})
    one: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('one') }})
    other: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other') }})
    two: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two') }})
    zero: Optional[LocalizedStringBundle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zero') }})
    
