from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GqlQueryParameter:
    r"""GqlQueryParameter
    A binding parameter for a GQL query.
    """
    
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    value: Optional[Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
