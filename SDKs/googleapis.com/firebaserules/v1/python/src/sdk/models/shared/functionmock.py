from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FunctionMock:
    r"""FunctionMock
    Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.
    """
    
    args: Optional[List[Arg]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('function') }})
    result: Optional[Result] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
