from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2intentmessage
from . import googleclouddialogflowv2intent
from . import googleclouddialogflowv2context
from . import googleclouddialogflowv2sentimentanalysisresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2QueryResult:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    all_required_params_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allRequiredParamsPresent' }})
    cancels_slot_filling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelsSlotFilling' }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticInfo' }})
    fulfillment_messages: Optional[List[googleclouddialogflowv2intentmessage.GoogleCloudDialogflowV2IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentMessages' }})
    fulfillment_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentText' }})
    intent: Optional[googleclouddialogflowv2intent.GoogleCloudDialogflowV2Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    intent_detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentDetectionConfidence' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    output_contexts: Optional[List[googleclouddialogflowv2context.GoogleCloudDialogflowV2Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    query_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryText' }})
    sentiment_analysis_result: Optional[googleclouddialogflowv2sentimentanalysisresult.GoogleCloudDialogflowV2SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisResult' }})
    speech_recognition_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechRecognitionConfidence' }})
    webhook_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookPayload' }})
    webhook_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookSource' }})
    
