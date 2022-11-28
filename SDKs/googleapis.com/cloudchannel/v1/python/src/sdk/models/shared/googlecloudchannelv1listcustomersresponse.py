from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudChannelV1ListCustomersResponse:
    r"""GoogleCloudChannelV1ListCustomersResponse
    Response message for CloudChannelService.ListCustomers.
    """
    
    customers: Optional[List[GoogleCloudChannelV1Customer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
