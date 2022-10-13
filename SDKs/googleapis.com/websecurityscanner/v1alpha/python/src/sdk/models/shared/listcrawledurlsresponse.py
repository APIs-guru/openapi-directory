from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crawledurl


@dataclass_json
@dataclass
class ListCrawledUrlsResponse:
    crawled_urls: Optional[List[crawledurl.CrawledURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crawledUrls' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
