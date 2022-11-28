from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1WebDetectionParams:
    r"""GoogleCloudVisionV1p2beta1WebDetectionParams
    Parameters for web detection request.
    """
    
    include_geo_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeGeoResults') }})
    
