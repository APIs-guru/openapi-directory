from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData:
    r"""GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData
    The input data used to train a new `ProcessorVersion`.
    """
    
    test_documents: Optional[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDocuments') }})
    training_documents: Optional[GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingDocuments') }})
    
