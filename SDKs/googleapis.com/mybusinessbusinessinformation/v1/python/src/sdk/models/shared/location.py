from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationInput:
    r"""LocationInput
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[AdWordsLocationExtensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    categories: Optional[CategoriesInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    more_hours: Optional[List[MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[OpenInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    phone_numbers: Optional[PhoneNumbers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    service_items: Optional[List[ServiceItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceItems') }})
    special_hours: Optional[SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    storefront_address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storefrontAddress') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    

@dataclass_json
@dataclass
class Location:
    r"""Location
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[AdWordsLocationExtensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    categories: Optional[Categories] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    metadata: Optional[Metadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[List[MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[OpenInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    phone_numbers: Optional[PhoneNumbers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    service_items: Optional[List[ServiceItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceItems') }})
    special_hours: Optional[SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    storefront_address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storefrontAddress') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    website_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUri') }})
    
