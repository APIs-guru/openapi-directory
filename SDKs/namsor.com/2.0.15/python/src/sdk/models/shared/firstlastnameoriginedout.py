from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirstLastNameOriginedOut:
    countries_origin_top: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countriesOriginTop' }})
    country_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryOrigin' }})
    country_origin_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryOriginAlt' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    probability_alt_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityAltCalibrated' }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityCalibrated' }})
    region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionOrigin' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    sub_region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subRegionOrigin' }})
    top_region_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topRegionOrigin' }})
    
