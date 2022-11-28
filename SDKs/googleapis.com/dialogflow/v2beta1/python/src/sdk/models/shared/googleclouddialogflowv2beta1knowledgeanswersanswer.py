from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum(str, Enum):
    MATCH_CONFIDENCE_LEVEL_UNSPECIFIED = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer:
    r"""GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
    An answer from Knowledge Connector.
    """
    
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    faq_question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faqQuestion') }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchConfidence') }})
    match_confidence_level: Optional[GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchConfidenceLevel') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
