from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationconfig
from . import googlecloudhealthcarev1beta1dicomstreamconfig


@dataclass_json
@dataclass
class DicomStore:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    stream_configs: Optional[List[googlecloudhealthcarev1beta1dicomstreamconfig.GoogleCloudHealthcareV1beta1DicomStreamConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamConfigs' }})
    
