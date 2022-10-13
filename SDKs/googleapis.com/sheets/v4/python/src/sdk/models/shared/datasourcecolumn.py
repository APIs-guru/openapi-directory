from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasourcecolumnreference


@dataclass_json
@dataclass
class DataSourceColumn:
    formula: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formula' }})
    reference: Optional[datasourcecolumnreference.DataSourceColumnReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    
