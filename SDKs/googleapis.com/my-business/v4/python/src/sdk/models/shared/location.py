from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adwordslocationextensions
from . import category
from . import postaladdress
from . import attribute
from . import latlng
from . import locationkey
from . import locationstate
from . import metadata
from . import morehours
from . import openinfo
from . import pricelist
from . import category
from . import profile
from . import businesshours
from . import relationshipdata
from . import serviceareabusiness
from . import specialhours


@dataclass_json
@dataclass
class Location:
    ad_words_location_extensions: Optional[adwordslocationextensions.AdWordsLocationExtensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adWordsLocationExtensions' }})
    additional_categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCategories' }})
    additional_phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalPhones' }})
    address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    latlng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latlng' }})
    location_key: Optional[locationkey.LocationKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationKey' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    location_state: Optional[locationstate.LocationState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationState' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    more_hours: Optional[List[morehours.MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moreHours' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_info: Optional[openinfo.OpenInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openInfo' }})
    price_lists: Optional[List[pricelist.PriceList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceLists' }})
    primary_category: Optional[category.Category] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryCategory' }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryPhone' }})
    profile: Optional[profile.Profile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    regular_hours: Optional[businesshours.BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regularHours' }})
    relationship_data: Optional[relationshipdata.RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipData' }})
    service_area: Optional[serviceareabusiness.ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceArea' }})
    special_hours: Optional[specialhours.SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialHours' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUrl' }})
    
