from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CaOptions:
    is_ca: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCa' }})
    max_issuer_path_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIssuerPathLength' }})
    
