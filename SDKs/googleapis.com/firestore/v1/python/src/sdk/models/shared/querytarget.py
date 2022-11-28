from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryTarget:
    r"""QueryTarget
    A target specified by a query.
    """
    
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    structured_query: Optional[StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredQuery') }})
    
