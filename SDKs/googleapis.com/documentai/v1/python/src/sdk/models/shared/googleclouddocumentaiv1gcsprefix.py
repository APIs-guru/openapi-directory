from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1GcsPrefix:
    r"""GoogleCloudDocumentaiV1GcsPrefix
    Specifies all documents on Cloud Storage with a common prefix.
    """
    
    gcs_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUriPrefix') }})
    
