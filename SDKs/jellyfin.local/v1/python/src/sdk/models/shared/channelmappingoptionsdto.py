from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChannelMappingOptionsDto:
    r"""ChannelMappingOptionsDto
    Channel mapping options dto.
    """
    
    mappings: Optional[List[NameValuePair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mappings') }})
    provider_channels: Optional[List[NameIDPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderChannels') }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProviderName') }})
    tuner_channels: Optional[List[TunerChannelMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TunerChannels') }})
    
