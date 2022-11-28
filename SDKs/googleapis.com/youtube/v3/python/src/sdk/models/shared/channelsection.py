from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelSection:
    content_details: Optional[ChannelSectionContentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    localizations: Optional[dict[str, ChannelSectionLocalization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizations') }})
    snippet: Optional[ChannelSectionSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    targeting: Optional[ChannelSectionTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
