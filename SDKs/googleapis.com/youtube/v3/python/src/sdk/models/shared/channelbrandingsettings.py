from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelBrandingSettings:
    r"""ChannelBrandingSettings
    Branding properties of a YouTube channel.
    """
    
    channel: Optional[ChannelSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    hints: Optional[List[PropertyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hints') }})
    image: Optional[ImageSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    watch: Optional[WatchSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watch') }})
    
