from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Statement:
    r"""Statement
    A single DML statement.
    """
    
    param_types: Optional[dict[str, Type]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paramTypes') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    sql: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sql') }})
    
