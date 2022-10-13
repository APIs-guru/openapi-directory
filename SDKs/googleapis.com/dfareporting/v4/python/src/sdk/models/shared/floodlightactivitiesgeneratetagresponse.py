from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FloodlightActivitiesGenerateTagResponse:
    floodlight_activity_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityTag' }})
    global_site_tag_global_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalSiteTagGlobalSnippet' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
