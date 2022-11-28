from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest:
    r"""GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest
    Evaluates the given ProcessorVersion against the supplied documents.
    """
    
    evaluation_documents: Optional[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationDocuments') }})
    
