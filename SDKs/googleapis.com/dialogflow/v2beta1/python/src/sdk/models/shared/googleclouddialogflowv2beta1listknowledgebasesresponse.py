from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse:
    r"""GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse
    Response message for KnowledgeBases.ListKnowledgeBases.
    """
    
    knowledge_bases: Optional[List[GoogleCloudDialogflowV2beta1KnowledgeBase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knowledgeBases') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
