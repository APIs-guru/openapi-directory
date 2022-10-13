from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EvaluationConfigSmartReplyConfig:
    allowlist_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowlistDocument' }})
    max_result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResultCount' }})
    
