from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1CreateDatasetRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateDatasetRequest
    Request message for CreateDataset.
    """
    
    dataset: Optional[GoogleCloudDatalabelingV1beta1Dataset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    
