from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest:
    r"""GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest
    Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
    """
    
    requests: Optional[List[GoogleCloudDocumentaiV1beta2ProcessDocumentRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
