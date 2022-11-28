from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultSetMetadata:
    r"""ResultSetMetadata
    Metadata about a ResultSet or PartialResultSet.
    """
    
    row_type: Optional[StructType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowType') }})
    transaction: Optional[Transaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction') }})
    undeclared_parameters: Optional[StructType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('undeclaredParameters') }})
    
