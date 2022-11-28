from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OracleTable:
    r"""OracleTable
    Oracle table.
    """
    
    oracle_columns: Optional[List[OracleColumn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleColumns') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
