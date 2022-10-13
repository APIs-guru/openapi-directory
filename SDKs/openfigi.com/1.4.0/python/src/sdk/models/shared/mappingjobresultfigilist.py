from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import figiresult


@dataclass_json
@dataclass
class MappingJobResultFigiList:
    data: Optional[List[figiresult.FigiResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
