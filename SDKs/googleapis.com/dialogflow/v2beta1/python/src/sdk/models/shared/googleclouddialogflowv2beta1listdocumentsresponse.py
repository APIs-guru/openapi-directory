from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListDocumentsResponse:
    r"""GoogleCloudDialogflowV2beta1ListDocumentsResponse
    Response message for Documents.ListDocuments.
    """
    
    documents: Optional[List[GoogleCloudDialogflowV2beta1Document]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
