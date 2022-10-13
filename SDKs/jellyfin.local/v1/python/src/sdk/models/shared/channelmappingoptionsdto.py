from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namevaluepair
from . import nameidpair
from . import tunerchannelmapping


@dataclass_json
@dataclass
class ChannelMappingOptionsDto:
    mappings: Optional[List[namevaluepair.NameValuePair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mappings' }})
    provider_channels: Optional[List[nameidpair.NameIDPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderChannels' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    tuner_channels: Optional[List[tunerchannelmapping.TunerChannelMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TunerChannels' }})
    
