from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import meta
from . import parametersrow


@dataclass_json
@dataclass
class OpenAqParametersResult:
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: List[parametersrow.ParametersRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
