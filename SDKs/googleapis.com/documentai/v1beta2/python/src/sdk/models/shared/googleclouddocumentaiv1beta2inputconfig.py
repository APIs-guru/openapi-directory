from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2InputConfig:
    r"""GoogleCloudDocumentaiV1beta2InputConfig
    The desired input location and metadata.
    """
    
    contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contents') }})
    gcs_source: Optional[GoogleCloudDocumentaiV1beta2GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
