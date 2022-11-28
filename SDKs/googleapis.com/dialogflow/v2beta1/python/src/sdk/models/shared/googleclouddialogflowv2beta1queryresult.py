from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1QueryResult:
    r"""GoogleCloudDialogflowV2beta1QueryResult
    Represents the result of conversational query or event processing.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    all_required_params_present: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allRequiredParamsPresent') }})
    cancels_slot_filling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelsSlotFilling') }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticInfo') }})
    fulfillment_messages: Optional[List[GoogleCloudDialogflowV2beta1IntentMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentMessages') }})
    fulfillment_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentText') }})
    intent: Optional[GoogleCloudDialogflowV2beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    intent_detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentDetectionConfidence') }})
    knowledge_answers: Optional[GoogleCloudDialogflowV2beta1KnowledgeAnswers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeAnswers') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    output_contexts: Optional[List[GoogleCloudDialogflowV2beta1Context]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputContexts') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    query_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryText') }})
    sentiment_analysis_result: Optional[GoogleCloudDialogflowV2beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisResult') }})
    speech_recognition_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechRecognitionConfidence') }})
    webhook_payload: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookPayload') }})
    webhook_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookSource') }})
    
