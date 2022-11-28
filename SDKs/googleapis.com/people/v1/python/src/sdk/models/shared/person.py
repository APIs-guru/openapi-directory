from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PersonAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    LESS_THAN_EIGHTEEN = "LESS_THAN_EIGHTEEN"
    EIGHTEEN_TO_TWENTY = "EIGHTEEN_TO_TWENTY"
    TWENTY_ONE_OR_OLDER = "TWENTY_ONE_OR_OLDER"


@dataclass_json
@dataclass
class PersonInput:
    r"""PersonInput
    Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
    """
    
    addresses: Optional[List[AddressInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    biographies: Optional[List[BiographyInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biographies') }})
    birthdays: Optional[List[BirthdayInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthdays') }})
    bragging_rights: Optional[List[BraggingRightsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('braggingRights') }})
    calendar_urls: Optional[List[CalendarURLInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarUrls') }})
    client_data: Optional[List[ClientDataInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    email_addresses: Optional[List[EmailAddressInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    events: Optional[List[EventInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    external_ids: Optional[List[ExternalIDInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    file_ases: Optional[List[FileAsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileAses') }})
    genders: Optional[List[GenderInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genders') }})
    im_clients: Optional[List[ImClientInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imClients') }})
    interests: Optional[List[InterestInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interests') }})
    locales: Optional[List[LocaleInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    locations: Optional[List[LocationInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    memberships: Optional[List[MembershipInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    metadata: Optional[PersonMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    misc_keywords: Optional[List[MiscKeywordInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miscKeywords') }})
    names: Optional[List[NameInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    nicknames: Optional[List[NicknameInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicknames') }})
    occupations: Optional[List[OccupationInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupations') }})
    organizations: Optional[List[OrganizationInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    phone_numbers: Optional[List[PhoneNumberInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    relations: Optional[List[RelationInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    residences: Optional[List[ResidenceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residences') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    sip_addresses: Optional[List[SipAddressInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sipAddresses') }})
    skills: Optional[List[SkillInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    urls: Optional[List[URLInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_defined: Optional[List[UserDefinedInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefined') }})
    

@dataclass_json
@dataclass
class Person:
    r"""Person
    Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
    """
    
    addresses: Optional[List[Address]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    age_range: Optional[PersonAgeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRange') }})
    age_ranges: Optional[List[AgeRangeType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRanges') }})
    biographies: Optional[List[Biography]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biographies') }})
    birthdays: Optional[List[Birthday]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthdays') }})
    bragging_rights: Optional[List[BraggingRights]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('braggingRights') }})
    calendar_urls: Optional[List[CalendarURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarUrls') }})
    client_data: Optional[List[ClientData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientData') }})
    cover_photos: Optional[List[CoverPhoto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPhotos') }})
    email_addresses: Optional[List[EmailAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    external_ids: Optional[List[ExternalID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIds') }})
    file_ases: Optional[List[FileAs]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileAses') }})
    genders: Optional[List[Gender]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genders') }})
    im_clients: Optional[List[ImClient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imClients') }})
    interests: Optional[List[Interest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interests') }})
    locales: Optional[List[Locale]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    locations: Optional[List[Location]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    memberships: Optional[List[Membership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    metadata: Optional[PersonMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    misc_keywords: Optional[List[MiscKeyword]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miscKeywords') }})
    names: Optional[List[Name]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    nicknames: Optional[List[Nickname]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicknames') }})
    occupations: Optional[List[Occupation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupations') }})
    organizations: Optional[List[Organization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    photos: Optional[List[Photo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    relations: Optional[List[Relation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relations') }})
    relationship_interests: Optional[List[RelationshipInterest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipInterests') }})
    relationship_statuses: Optional[List[RelationshipStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipStatuses') }})
    residences: Optional[List[Residence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('residences') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    sip_addresses: Optional[List[SipAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sipAddresses') }})
    skills: Optional[List[Skill]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    taglines: Optional[List[Tagline]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taglines') }})
    urls: Optional[List[URL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    user_defined: Optional[List[UserDefined]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userDefined') }})
    
