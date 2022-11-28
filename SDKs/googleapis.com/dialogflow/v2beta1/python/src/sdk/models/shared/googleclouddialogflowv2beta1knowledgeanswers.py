from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1KnowledgeAnswers:
    r"""GoogleCloudDialogflowV2beta1KnowledgeAnswers
    Represents the result of querying a Knowledge base.
    """
    
    answers: Optional[List[GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answers') }})
    
