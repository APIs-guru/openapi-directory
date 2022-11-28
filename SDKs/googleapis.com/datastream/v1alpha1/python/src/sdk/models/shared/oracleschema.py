from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OracleSchema:
    r"""OracleSchema
    Oracle schema.
    """
    
    oracle_tables: Optional[List[OracleTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleTables') }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaName') }})
    
