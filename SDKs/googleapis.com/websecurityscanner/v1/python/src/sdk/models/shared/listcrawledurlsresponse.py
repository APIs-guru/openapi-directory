from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListCrawledUrlsResponse:
    r"""ListCrawledUrlsResponse
    Response for the `ListCrawledUrls` method.
    """
    
    crawled_urls: Optional[List[CrawledURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crawledUrls') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
