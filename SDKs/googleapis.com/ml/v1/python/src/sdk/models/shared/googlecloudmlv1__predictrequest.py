from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleapi__httpbody


@dataclass_json
@dataclass
class GoogleCloudMlV1PredictRequest:
    http_body: Optional[googleapi__httpbody.GoogleAPIHTTPBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpBody' }})
    
