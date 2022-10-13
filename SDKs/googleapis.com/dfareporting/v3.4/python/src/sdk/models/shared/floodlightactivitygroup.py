from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import dimensionvalue
from . import dimensionvalue

class FloodlightActivityGroupTypeEnum(str, Enum):
    COUNTER = "COUNTER"
    SALE = "SALE"


@dataclass_json
@dataclass
class FloodlightActivityGroup:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationId' }})
    floodlight_configuration_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationIdDimensionValue' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    tag_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagString' }})
    type: Optional[FloodlightActivityGroupTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
