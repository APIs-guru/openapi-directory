from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphacustomattribute


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult:
    attributes: Optional[dict[str, googlecloudretailv2alphacustomattribute.GoogleCloudRetailV2alphaCustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    suggestion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestion' }})
    
