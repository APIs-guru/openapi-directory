from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1WebDetectionParams:
    include_geo_results: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeGeoResults' }})
    
