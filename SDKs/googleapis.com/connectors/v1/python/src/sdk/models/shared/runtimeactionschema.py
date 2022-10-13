from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputparameter
from . import resultmetadata


@dataclass_json
@dataclass
class RuntimeActionSchema:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    input_parameters: Optional[List[inputparameter.InputParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputParameters' }})
    result_metadata: Optional[List[resultmetadata.ResultMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultMetadata' }})
    
