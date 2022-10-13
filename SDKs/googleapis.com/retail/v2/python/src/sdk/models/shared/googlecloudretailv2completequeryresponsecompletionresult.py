from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2customattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompleteQueryResponseCompletionResult:
    attributes: Optional[dict[str, googlecloudretailv2customattribute.GoogleCloudRetailV2CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
