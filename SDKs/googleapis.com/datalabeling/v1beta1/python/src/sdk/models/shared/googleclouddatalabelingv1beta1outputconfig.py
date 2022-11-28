from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1OutputConfig:
    r"""GoogleCloudDatalabelingV1beta1OutputConfig
    The configuration of output data.
    """
    
    gcs_destination: Optional[GoogleCloudDatalabelingV1beta1GcsDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsDestination') }})
    gcs_folder_destination: Optional[GoogleCloudDatalabelingV1beta1GcsFolderDestination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsFolderDestination') }})
    
