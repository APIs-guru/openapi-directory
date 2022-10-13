from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum(str, Enum):
    MATCH_CONFIDENCE_LEVEL_UNSPECIFIED = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    faq_question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faqQuestion' }})
    match_confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchConfidence' }})
    match_confidence_level: Optional[GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchConfidenceLevel' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
