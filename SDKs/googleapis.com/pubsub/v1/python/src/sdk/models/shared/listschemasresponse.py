from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSchemasResponse:
    r"""ListSchemasResponse
    Response for the `ListSchemas` method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    schemas: Optional[List[Schema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    
