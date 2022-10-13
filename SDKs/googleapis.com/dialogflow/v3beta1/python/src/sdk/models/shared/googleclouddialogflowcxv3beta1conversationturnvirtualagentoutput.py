from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1page
from . import googleclouddialogflowcxv3beta1testrundifference
from . import googlerpcstatus
from . import googleclouddialogflowcxv3beta1responsemessagetext
from . import googleclouddialogflowcxv3beta1intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput:
    current_page: Optional[googleclouddialogflowcxv3beta1page.GoogleCloudDialogflowCxV3beta1Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticInfo' }})
    differences: Optional[List[googleclouddialogflowcxv3beta1testrundifference.GoogleCloudDialogflowCxV3beta1TestRunDifference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'differences' }})
    session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionParameters' }})
    status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    text_responses: Optional[List[googleclouddialogflowcxv3beta1responsemessagetext.GoogleCloudDialogflowCxV3beta1ResponseMessageText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textResponses' }})
    triggered_intent: Optional[googleclouddialogflowcxv3beta1intent.GoogleCloudDialogflowCxV3beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggeredIntent' }})
    
