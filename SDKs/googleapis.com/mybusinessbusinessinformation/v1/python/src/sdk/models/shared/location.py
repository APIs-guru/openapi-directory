from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adwordslocationextensions
from . import categories
from . import latlng
from . import metadata
from . import morehours
from . import openinfo
from . import phonenumbers
from . import profile
from . import businesshours
from . import relationshipdata
from . import serviceareabusiness
from . import serviceitem
from . import specialhours
from . import postaladdress


@dataclass_json
@dataclass
class Location:
    ad_words_location_extensions: Optional[adwordslocationextensions.AdWordsLocationExtensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adWordsLocationExtensions' }})
    categories: Optional[categories.Categories] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    latlng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latlng' }})
    metadata: Optional[metadata.Metadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    more_hours: Optional[List[morehours.MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moreHours' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open_info: Optional[openinfo.OpenInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openInfo' }})
    phone_numbers: Optional[phonenumbers.PhoneNumbers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumbers' }})
    profile: Optional[profile.Profile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    regular_hours: Optional[businesshours.BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regularHours' }})
    relationship_data: Optional[relationshipdata.RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipData' }})
    service_area: Optional[serviceareabusiness.ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceArea' }})
    service_items: Optional[List[serviceitem.ServiceItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceItems' }})
    special_hours: Optional[specialhours.SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialHours' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    storefront_address: Optional[postaladdress.PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storefrontAddress' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'websiteUri' }})
    
