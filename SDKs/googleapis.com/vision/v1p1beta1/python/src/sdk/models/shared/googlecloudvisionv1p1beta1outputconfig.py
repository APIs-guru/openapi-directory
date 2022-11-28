from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1OutputConfig:
    r"""GoogleCloudVisionV1p1beta1OutputConfig
    The desired output location and metadata.
    """
    
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchSize') }})
    gcs_destination: Optional[GoogleCloudVisionV1p1beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    
