from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1QueryResult:
    r"""GoogleCloudDialogflowCxV3beta1QueryResult
    Represents the result of a conversational query.
    """
    
    current_page: Optional[GoogleCloudDialogflowCxV3beta1Page] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPage') }})
    diagnostic_info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosticInfo') }})
    dtmf: Optional[GoogleCloudDialogflowCxV3beta1DtmfInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmf') }})
    intent: Optional[GoogleCloudDialogflowCxV3beta1Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    intent_detection_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intentDetectionConfidence') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    match: Optional[GoogleCloudDialogflowCxV3beta1Match] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    response_messages: Optional[List[GoogleCloudDialogflowCxV3beta1ResponseMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMessages') }})
    sentiment_analysis_result: Optional[GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentimentAnalysisResult') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcript') }})
    trigger_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerEvent') }})
    trigger_intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerIntent') }})
    webhook_payloads: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookPayloads') }})
    webhook_statuses: Optional[List[GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookStatuses') }})
    
