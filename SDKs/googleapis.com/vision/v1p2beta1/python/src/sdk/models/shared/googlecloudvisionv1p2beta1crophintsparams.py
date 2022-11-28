from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1CropHintsParams:
    r"""GoogleCloudVisionV1p2beta1CropHintsParams
    Parameters for crop hints annotation request.
    """
    
    aspect_ratios: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspectRatios') }})
    
