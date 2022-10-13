from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetChannelMappingDto:
    provider_channel_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderChannelId' }})
    provider_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderId' }})
    tuner_channel_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TunerChannelId' }})
    
