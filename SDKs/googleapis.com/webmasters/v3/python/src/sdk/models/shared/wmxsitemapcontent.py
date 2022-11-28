from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WmxSitemapContent:
    r"""WmxSitemapContent
    Information about the various content types in the sitemap.
    """
    
    indexed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexed') }})
    submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submitted') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
