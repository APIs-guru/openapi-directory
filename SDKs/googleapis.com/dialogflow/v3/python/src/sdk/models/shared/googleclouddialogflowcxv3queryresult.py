from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3page
from . import googleclouddialogflowcxv3dtmfinput
from . import googleclouddialogflowcxv3intent
from . import googleclouddialogflowcxv3match
from . import googleclouddialogflowcxv3responsemessage
from . import googleclouddialogflowcxv3sentimentanalysisresult
from . import googlerpcstatus


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3QueryResult:
    current_page: Optional[googleclouddialogflowcxv3page.GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPage' }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticInfo' }})
    dtmf: Optional[googleclouddialogflowcxv3dtmfinput.GoogleCloudDialogflowCxV3DtmfInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmf' }})
    intent: Optional[googleclouddialogflowcxv3intent.GoogleCloudDialogflowCxV3Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    intent_detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentDetectionConfidence' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    match: Optional[googleclouddialogflowcxv3match.GoogleCloudDialogflowCxV3Match] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    response_messages: Optional[List[googleclouddialogflowcxv3responsemessage.GoogleCloudDialogflowCxV3ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseMessages' }})
    sentiment_analysis_result: Optional[googleclouddialogflowcxv3sentimentanalysisresult.GoogleCloudDialogflowCxV3SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisResult' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerEvent' }})
    trigger_intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerIntent' }})
    webhook_payloads: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookPayloads' }})
    webhook_statuses: Optional[List[googlerpcstatus.GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookStatuses' }})
    
