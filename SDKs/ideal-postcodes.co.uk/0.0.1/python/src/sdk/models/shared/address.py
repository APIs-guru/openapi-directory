from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import postcodetype_enum


@dataclass_json
@dataclass
class Address:
    administrative_county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrative_county' }})
    building_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'building_name' }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'building_number' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'county' }})
    delivery_point_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_point_suffix' }})
    department_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department_name' }})
    dependent_locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependent_locality' }})
    dependent_thoroughfare: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependent_thoroughfare' }})
    district: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district' }})
    double_dependent_locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'double_dependent_locality' }})
    eastings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eastings' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    line_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_1' }})
    line_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_2' }})
    line_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_3' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    northings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northings' }})
    organisation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organisation_name' }})
    po_box: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'po_box' }})
    post_town: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_town' }})
    postal_county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_county' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    postcode_inward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode_inward' }})
    postcode_outward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode_outward' }})
    postcode_type: Optional[postcodetype_enum.PostcodeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode_type' }})
    premise: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'premise' }})
    su_organisation_indicator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'su_organisation_indicator' }})
    sub_building_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_building_name' }})
    thoroughfare: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thoroughfare' }})
    traditional_county: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traditional_county' }})
    udprn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'udprn' }})
    umprn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'umprn' }})
    ward: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ward' }})
    
