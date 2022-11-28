from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocalJwtVerifier:
    r"""LocalJwtVerifier
    A JWT verifier used only for the current service descriptor
    """
    
    algo_settings: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('algoSettings') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    source: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    strategy: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strategy') }})
    strict: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('strict') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
