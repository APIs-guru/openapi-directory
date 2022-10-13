from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oracleschema


@dataclass_json
@dataclass
class OracleRdbms:
    oracle_schemas: Optional[List[oracleschema.OracleSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleSchemas' }})
    
