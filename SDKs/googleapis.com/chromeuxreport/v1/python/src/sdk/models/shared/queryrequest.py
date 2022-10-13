from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class QueryRequestFormFactorEnum(str, Enum):
    ALL_FORM_FACTORS = "ALL_FORM_FACTORS"
    PHONE = "PHONE"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"


@dataclass_json
@dataclass
class QueryRequest:
    effective_connection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveConnectionType' }})
    form_factor: Optional[QueryRequestFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    metrics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'origin' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
