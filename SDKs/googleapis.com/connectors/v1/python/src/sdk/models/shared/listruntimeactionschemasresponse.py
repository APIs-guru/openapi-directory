from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRuntimeActionSchemasResponse:
    r"""ListRuntimeActionSchemasResponse
    Response message for ConnectorsService.ListRuntimeActionSchemas.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_action_schemas: Optional[List[RuntimeActionSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeActionSchemas') }})
    
