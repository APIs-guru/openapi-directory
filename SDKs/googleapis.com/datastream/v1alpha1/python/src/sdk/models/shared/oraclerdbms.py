from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OracleRdbms:
    r"""OracleRdbms
    Oracle database structure.
    """
    
    oracle_schemas: Optional[List[OracleSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oracleSchemas') }})
    
