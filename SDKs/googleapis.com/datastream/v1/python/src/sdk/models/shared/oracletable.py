from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import oraclecolumn


@dataclass_json
@dataclass
class OracleTable:
    oracle_columns: Optional[List[oraclecolumn.OracleColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oracleColumns' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
