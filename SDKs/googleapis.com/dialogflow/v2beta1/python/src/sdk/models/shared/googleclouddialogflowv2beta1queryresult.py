from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1intentmessage
from . import googleclouddialogflowv2beta1intent
from . import googleclouddialogflowv2beta1knowledgeanswers
from . import googleclouddialogflowv2beta1context
from . import googleclouddialogflowv2beta1sentimentanalysisresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1QueryResult:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    all_required_params_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allRequiredParamsPresent' }})
    cancels_slot_filling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelsSlotFilling' }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diagnosticInfo' }})
    fulfillment_messages: Optional[List[googleclouddialogflowv2beta1intentmessage.GoogleCloudDialogflowV2beta1IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentMessages' }})
    fulfillment_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentText' }})
    intent: Optional[googleclouddialogflowv2beta1intent.GoogleCloudDialogflowV2beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    intent_detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intentDetectionConfidence' }})
    knowledge_answers: Optional[googleclouddialogflowv2beta1knowledgeanswers.GoogleCloudDialogflowV2beta1KnowledgeAnswers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'knowledgeAnswers' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    output_contexts: Optional[List[googleclouddialogflowv2beta1context.GoogleCloudDialogflowV2beta1Context]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputContexts' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    query_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryText' }})
    sentiment_analysis_result: Optional[googleclouddialogflowv2beta1sentimentanalysisresult.GoogleCloudDialogflowV2beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentimentAnalysisResult' }})
    speech_recognition_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speechRecognitionConfidence' }})
    webhook_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookPayload' }})
    webhook_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookSource' }})
    
