from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1betaListDocumentsResponse:
    r"""GoogleCloudDiscoveryengineV1betaListDocumentsResponse
    Response message for DocumentService.ListDocuments method.
    """
    
    documents: Optional[List[GoogleCloudDiscoveryengineV1betaDocument]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documents') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
