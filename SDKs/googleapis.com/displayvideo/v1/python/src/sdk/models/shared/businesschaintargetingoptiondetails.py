from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BusinessChainTargetingOptionDetailsGeoRegionTypeEnum(str, Enum):
    GEO_REGION_TYPE_UNKNOWN = "GEO_REGION_TYPE_UNKNOWN"
    GEO_REGION_TYPE_OTHER = "GEO_REGION_TYPE_OTHER"
    GEO_REGION_TYPE_COUNTRY = "GEO_REGION_TYPE_COUNTRY"
    GEO_REGION_TYPE_REGION = "GEO_REGION_TYPE_REGION"
    GEO_REGION_TYPE_TERRITORY = "GEO_REGION_TYPE_TERRITORY"
    GEO_REGION_TYPE_PROVINCE = "GEO_REGION_TYPE_PROVINCE"
    GEO_REGION_TYPE_STATE = "GEO_REGION_TYPE_STATE"
    GEO_REGION_TYPE_PREFECTURE = "GEO_REGION_TYPE_PREFECTURE"
    GEO_REGION_TYPE_GOVERNORATE = "GEO_REGION_TYPE_GOVERNORATE"
    GEO_REGION_TYPE_CANTON = "GEO_REGION_TYPE_CANTON"
    GEO_REGION_TYPE_UNION_TERRITORY = "GEO_REGION_TYPE_UNION_TERRITORY"
    GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY"
    GEO_REGION_TYPE_DMA_REGION = "GEO_REGION_TYPE_DMA_REGION"
    GEO_REGION_TYPE_METRO = "GEO_REGION_TYPE_METRO"
    GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT"
    GEO_REGION_TYPE_COUNTY = "GEO_REGION_TYPE_COUNTY"
    GEO_REGION_TYPE_MUNICIPALITY = "GEO_REGION_TYPE_MUNICIPALITY"
    GEO_REGION_TYPE_CITY = "GEO_REGION_TYPE_CITY"
    GEO_REGION_TYPE_POSTAL_CODE = "GEO_REGION_TYPE_POSTAL_CODE"
    GEO_REGION_TYPE_DEPARTMENT = "GEO_REGION_TYPE_DEPARTMENT"
    GEO_REGION_TYPE_AIRPORT = "GEO_REGION_TYPE_AIRPORT"
    GEO_REGION_TYPE_TV_REGION = "GEO_REGION_TYPE_TV_REGION"
    GEO_REGION_TYPE_OKRUG = "GEO_REGION_TYPE_OKRUG"
    GEO_REGION_TYPE_BOROUGH = "GEO_REGION_TYPE_BOROUGH"
    GEO_REGION_TYPE_CITY_REGION = "GEO_REGION_TYPE_CITY_REGION"
    GEO_REGION_TYPE_ARRONDISSEMENT = "GEO_REGION_TYPE_ARRONDISSEMENT"
    GEO_REGION_TYPE_NEIGHBORHOOD = "GEO_REGION_TYPE_NEIGHBORHOOD"
    GEO_REGION_TYPE_UNIVERSITY = "GEO_REGION_TYPE_UNIVERSITY"
    GEO_REGION_TYPE_DISTRICT = "GEO_REGION_TYPE_DISTRICT"


@dataclass_json
@dataclass
class BusinessChainTargetingOptionDetails:
    r"""BusinessChainTargetingOptionDetails
    Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
    """
    
    business_chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessChain') }})
    geo_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegion') }})
    geo_region_type: Optional[BusinessChainTargetingOptionDetailsGeoRegionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoRegionType') }})
    
