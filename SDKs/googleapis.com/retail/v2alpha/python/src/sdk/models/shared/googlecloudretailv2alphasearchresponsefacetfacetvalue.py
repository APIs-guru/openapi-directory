from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphainterval


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchResponseFacetFacetValue:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    interval: Optional[googlecloudretailv2alphainterval.GoogleCloudRetailV2alphaInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    max_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxValue' }})
    min_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minValue' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
