from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1renewalsettings


@dataclass_json
@dataclass
class GoogleCloudChannelV1CommitmentSettings:
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    renewal_settings: Optional[googlecloudchannelv1renewalsettings.GoogleCloudChannelV1RenewalSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'renewalSettings' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
