from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchProcessRequest:
    r"""GoogleCloudDocumentaiV1beta3BatchProcessRequest
    Request message for batch process document method.
    """
    
    document_output_config: Optional[GoogleCloudDocumentaiV1beta3DocumentOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentOutputConfig') }})
    input_configs: Optional[List[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfigs') }})
    input_documents: Optional[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDocuments') }})
    output_config: Optional[GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    skip_human_review: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipHumanReview') }})
    
