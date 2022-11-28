from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2OutputConfig:
    r"""GoogleCloudDocumentaiV1beta2OutputConfig
    The desired output location and metadata.
    """
    
    gcs_destination: Optional[GoogleCloudDocumentaiV1beta2GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    pages_per_shard: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagesPerShard') }})
    
