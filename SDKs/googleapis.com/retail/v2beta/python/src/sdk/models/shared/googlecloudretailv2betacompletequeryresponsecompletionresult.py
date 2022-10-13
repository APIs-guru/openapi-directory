from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betacustomattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult:
    attributes: Optional[dict[str, googlecloudretailv2betacustomattribute.GoogleCloudRetailV2betaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
