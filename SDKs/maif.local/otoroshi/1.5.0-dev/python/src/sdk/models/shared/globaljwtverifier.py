from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalJwtVerifier:
    r"""GlobalJwtVerifier
    A JWT verifier used by multiple service descriptor
    """
    
    algo_settings: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    desc: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    strategy: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    strict: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    
