from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig:
    r"""GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig
    The message for input config in batch process.
    """
    
    gcs_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
