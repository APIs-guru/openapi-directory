from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1knowledgeanswersanswer


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1KnowledgeAnswers:
    answers: Optional[List[googleclouddialogflowv2beta1knowledgeanswersanswer.GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answers' }})
    
