from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaPageInfo:
    r"""GoogleCloudDiscoveryengineV1alphaPageInfo
    Detailed page information.
    """
    
    page_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageCategory') }})
    pageview_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageviewId') }})
    referrer_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrerUri') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
