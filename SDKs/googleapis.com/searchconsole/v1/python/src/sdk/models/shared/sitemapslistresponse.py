from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wmxsitemap


@dataclass_json
@dataclass
class SitemapsListResponse:
    sitemap: Optional[List[wmxsitemap.WmxSitemap]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sitemap' }})
    
