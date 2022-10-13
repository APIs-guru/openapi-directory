from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oracletable


@dataclass_json
@dataclass
class OracleSchema:
    oracle_tables: Optional[List[oracletable.OracleTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleTables' }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    
