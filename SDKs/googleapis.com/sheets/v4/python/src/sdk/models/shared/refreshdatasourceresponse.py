from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RefreshDataSourceResponse:
    r"""RefreshDataSourceResponse
    The response from refreshing one or multiple data source objects.
    """
    
    statuses: Optional[List[RefreshDataSourceObjectExecutionStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
