from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2InputConfig:
    r"""GoogleCloudDialogflowV2InputConfig
    Represents the configuration of importing a set of conversation files in Google Cloud Storage.
    """
    
    gcs_source: Optional[GoogleCloudDialogflowV2GcsSources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    
