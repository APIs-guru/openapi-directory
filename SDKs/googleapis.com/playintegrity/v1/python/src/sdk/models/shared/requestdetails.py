from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequestDetails:
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    request_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestPackageName' }})
    timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMillis' }})
    
