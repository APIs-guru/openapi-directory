from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2GcsSource:
    r"""GoogleCloudDocumentaiV1beta2GcsSource
    The Google Cloud Storage location where the input file will be read from.
    """
    
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
