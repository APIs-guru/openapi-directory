from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServiceBindingsResponse:
    r"""ListServiceBindingsResponse
    Response returned by the ListServiceBindings method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    service_bindings: Optional[List[ServiceBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceBindings') }})
    
