from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import arg
from . import result


@dataclass_json
@dataclass
class FunctionMock:
    args: Optional[List[arg.Arg]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    result: Optional[result.Result] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
