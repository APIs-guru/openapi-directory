from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import wmxsitemapcontent

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
    contents: Optional[List[wmxsitemapcontent.WmxSitemapContent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contents' }})
    errors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    is_pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPending' }})
    is_sitemaps_index: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSitemapsIndex' }})
    last_downloaded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDownloaded' }})
    last_submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSubmitted' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    type: Optional[WmxSitemapTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    warnings: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
