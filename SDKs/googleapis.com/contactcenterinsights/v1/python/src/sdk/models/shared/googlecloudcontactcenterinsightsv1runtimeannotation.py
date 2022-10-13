from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1answerfeedback
from . import googlecloudcontactcenterinsightsv1articlesuggestiondata
from . import googlecloudcontactcenterinsightsv1dialogflowinteractiondata
from . import googlecloudcontactcenterinsightsv1annotationboundary
from . import googlecloudcontactcenterinsightsv1faqanswerdata
from . import googlecloudcontactcenterinsightsv1smartcomposesuggestiondata
from . import googlecloudcontactcenterinsightsv1smartreplydata
from . import googlecloudcontactcenterinsightsv1annotationboundary


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1RuntimeAnnotation:
    annotation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationId' }})
    answer_feedback: Optional[googlecloudcontactcenterinsightsv1answerfeedback.GoogleCloudContactcenterinsightsV1AnswerFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerFeedback' }})
    article_suggestion: Optional[googlecloudcontactcenterinsightsv1articlesuggestiondata.GoogleCloudContactcenterinsightsV1ArticleSuggestionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleSuggestion' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    dialogflow_interaction: Optional[googlecloudcontactcenterinsightsv1dialogflowinteractiondata.GoogleCloudContactcenterinsightsV1DialogflowInteractionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowInteraction' }})
    end_boundary: Optional[googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endBoundary' }})
    faq_answer: Optional[googlecloudcontactcenterinsightsv1faqanswerdata.GoogleCloudContactcenterinsightsV1FaqAnswerData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqAnswer' }})
    smart_compose_suggestion: Optional[googlecloudcontactcenterinsightsv1smartcomposesuggestiondata.GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartComposeSuggestion' }})
    smart_reply: Optional[googlecloudcontactcenterinsightsv1smartreplydata.GoogleCloudContactcenterinsightsV1SmartReplyData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smartReply' }})
    start_boundary: Optional[googlecloudcontactcenterinsightsv1annotationboundary.GoogleCloudContactcenterinsightsV1AnnotationBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startBoundary' }})
    
