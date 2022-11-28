from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaSearchInfo:
    r"""GoogleCloudDiscoveryengineV1betaSearchInfo
    Detailed search information.
    """
    
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    search_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchQuery') }})
    
