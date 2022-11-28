from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNamespacesResponse:
    r"""ListNamespacesResponse
    Response to ListNamespacesRequest that contains all the project's namespaces.
    """
    
    namespaces: Optional[List[Namespace]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaces') }})
    
