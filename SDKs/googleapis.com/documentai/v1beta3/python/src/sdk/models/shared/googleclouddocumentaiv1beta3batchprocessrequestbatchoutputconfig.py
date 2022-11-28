from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig:
    r"""GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig
    The message for output config in batch process.
    """
    
    gcs_destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    
