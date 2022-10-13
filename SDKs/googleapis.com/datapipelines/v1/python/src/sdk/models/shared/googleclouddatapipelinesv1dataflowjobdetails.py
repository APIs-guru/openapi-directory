from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatapipelinesv1sdkversion


@dataclass_json
@dataclass
class GoogleCloudDatapipelinesV1DataflowJobDetails:
    current_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentWorkers' }})
    resource_info: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceInfo' }})
    sdk_version: Optional[googleclouddatapipelinesv1sdkversion.GoogleCloudDatapipelinesV1SdkVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkVersion' }})
    
