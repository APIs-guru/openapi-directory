from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmcardsrow


@dataclass_json
@dataclass
class EnterpriseCrmCardsTabularData:
    headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    rows: Optional[List[enterprisecrmcardsrow.EnterpriseCrmCardsRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
