from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3page
from . import googleclouddialogflowcxv3testrundifference
from . import googlerpcstatus
from . import googleclouddialogflowcxv3responsemessagetext
from . import googleclouddialogflowcxv3intent


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput:
    current_page: Optional[googleclouddialogflowcxv3page.GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticInfo' }})
    differences: Optional[List[googleclouddialogflowcxv3testrundifference.GoogleCloudDialogflowCxV3TestRunDifference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'differences' }})
    session_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionParameters' }})
    status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    text_responses: Optional[List[googleclouddialogflowcxv3responsemessagetext.GoogleCloudDialogflowCxV3ResponseMessageText]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textResponses' }})
    triggered_intent: Optional[googleclouddialogflowcxv3intent.GoogleCloudDialogflowCxV3Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggeredIntent' }})
    
