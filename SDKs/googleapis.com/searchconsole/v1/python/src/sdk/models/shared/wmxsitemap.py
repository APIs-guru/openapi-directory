from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WmxSitemapTypeEnum(str, Enum):
    NOT_SITEMAP = "NOT_SITEMAP"
    URL_LIST = "URL_LIST"
    SITEMAP = "SITEMAP"
    RSS_FEED = "RSS_FEED"
    ATOM_FEED = "ATOM_FEED"
    PATTERN_SITEMAP = "PATTERN_SITEMAP"
    OCEANFRONT = "OCEANFRONT"


@dataclass_json
@dataclass
class WmxSitemap:
    r"""WmxSitemap
    Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184).
    """
    
    contents: Optional[List[WmxSitemapContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    is_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPending') }})
    is_sitemaps_index: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSitemapsIndex') }})
    last_downloaded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDownloaded') }})
    last_submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSubmitted') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    type: Optional[WmxSitemapTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
