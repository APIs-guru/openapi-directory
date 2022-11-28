from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig:
    r"""GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig
    The configuration used when outputting documents.
    """
    
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldMask') }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUri') }})
    
