from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2assistqueryparameters


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SuggestFaqAnswersRequest:
    assist_query_params: Optional[googleclouddialogflowv2assistqueryparameters.GoogleCloudDialogflowV2AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistQueryParams' }})
    context_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contextSize' }})
    latest_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestMessage' }})
    
