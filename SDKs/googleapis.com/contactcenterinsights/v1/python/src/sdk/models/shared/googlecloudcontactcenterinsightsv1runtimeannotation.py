from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1RuntimeAnnotation:
    r"""GoogleCloudContactcenterinsightsV1RuntimeAnnotation
    An annotation that was generated during the customer and agent interaction.
    """
    
    annotation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationId') }})
    answer_feedback: Optional[GoogleCloudContactcenterinsightsV1AnswerFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answerFeedback') }})
    article_suggestion: Optional[GoogleCloudContactcenterinsightsV1ArticleSuggestionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleSuggestion') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dialogflow_interaction: Optional[GoogleCloudContactcenterinsightsV1DialogflowInteractionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowInteraction') }})
    end_boundary: Optional[GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endBoundary') }})
    faq_answer: Optional[GoogleCloudContactcenterinsightsV1FaqAnswerData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqAnswer') }})
    smart_compose_suggestion: Optional[GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartComposeSuggestion') }})
    smart_reply: Optional[GoogleCloudContactcenterinsightsV1SmartReplyData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartReply') }})
    start_boundary: Optional[GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startBoundary') }})
    
