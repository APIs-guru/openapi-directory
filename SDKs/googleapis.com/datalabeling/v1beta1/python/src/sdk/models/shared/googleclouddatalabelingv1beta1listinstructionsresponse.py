from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1instruction


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1ListInstructionsResponse:
    instructions: Optional[List[googleclouddatalabelingv1beta1instruction.GoogleCloudDatalabelingV1beta1Instruction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
