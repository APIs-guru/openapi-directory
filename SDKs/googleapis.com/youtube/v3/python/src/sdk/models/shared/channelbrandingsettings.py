from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelsettings
from . import propertyvalue
from . import imagesettings
from . import watchsettings


@dataclass_json
@dataclass
class ChannelBrandingSettings:
    channel: Optional[channelsettings.ChannelSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    hints: Optional[List[propertyvalue.PropertyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hints' }})
    image: Optional[imagesettings.ImageSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    watch: Optional[watchsettings.WatchSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watch' }})
    
