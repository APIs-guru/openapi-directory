from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetIosReopenAttributionRequest:
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleId' }})
    requested_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedLink' }})
    sdk_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sdkVersion' }})
    
