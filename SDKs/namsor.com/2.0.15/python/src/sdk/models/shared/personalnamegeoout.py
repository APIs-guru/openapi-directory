from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonalNameGeoOut:
    countries_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countriesTop' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryAlt' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityAltCalibrated' }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityCalibrated' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    sub_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subRegion' }})
    top_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topRegion' }})
    
