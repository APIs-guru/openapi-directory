from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FloodlightActivitiesGenerateTagResponse:
    r"""FloodlightActivitiesGenerateTagResponse
    Floodlight Activity GenerateTag Response
    """
    
    floodlight_activity_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightActivityTag') }})
    global_site_tag_global_snippet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalSiteTagGlobalSnippet') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
