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
    additional_categories: Optional[List[CategoryInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    additional_phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPhones') }})
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    location_key: Optional[LocationKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationKey') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    location_state: Optional[LocationStateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationState') }})
    metadata: Optional[Metadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[List[MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[OpenInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    price_lists: Optional[List[PriceList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceLists') }})
    primary_category: Optional[CategoryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    special_hours: Optional[SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    

@dataclass_json
@dataclass
class Location:
    r"""Location
    A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
    """
    
    ad_words_location_extensions: Optional[AdWordsLocationExtensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adWordsLocationExtensions') }})
    additional_categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCategories') }})
    additional_phones: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalPhones') }})
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    attributes: Optional[List[Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    latlng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    location_key: Optional[LocationKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationKey') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    location_state: Optional[LocationState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationState') }})
    metadata: Optional[Metadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    more_hours: Optional[List[MoreHours]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreHours') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    open_info: Optional[OpenInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openInfo') }})
    price_lists: Optional[List[PriceList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceLists') }})
    primary_category: Optional[Category] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCategory') }})
    primary_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryPhone') }})
    profile: Optional[Profile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    regular_hours: Optional[BusinessHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regularHours') }})
    relationship_data: Optional[RelationshipData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipData') }})
    service_area: Optional[ServiceAreaBusiness] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceArea') }})
    special_hours: Optional[SpecialHours] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialHours') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    
