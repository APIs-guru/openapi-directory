from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1value


@dataclass_json
@dataclass
class GoogleCloudChannelV1Parameter:
    editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    value: Optional[googlecloudchannelv1value.GoogleCloudChannelV1Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
