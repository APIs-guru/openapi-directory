from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1BatchProcessRequest:
    r"""GoogleCloudDocumentaiV1BatchProcessRequest
    Request message for batch process document method.
    """
    
    document_output_config: Optional[GoogleCloudDocumentaiV1DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentOutputConfig') }})
    input_documents: Optional[GoogleCloudDocumentaiV1BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDocuments') }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipHumanReview') }})
    
