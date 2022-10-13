from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import agerangetype
from . import biography
from . import birthday
from . import braggingrights
from . import calendarurl
from . import clientdata
from . import coverphoto
from . import emailaddress
from . import event
from . import externalid
from . import fileas
from . import gender
from . import imclient
from . import interest
from . import locale
from . import location
from . import membership
from . import personmetadata
from . import misckeyword
from . import name
from . import nickname
from . import occupation
from . import organization
from . import phonenumber
from . import photo
from . import relation
from . import relationshipinterest
from . import relationshipstatus
from . import residence
from . import sipaddress
from . import skill
from . import tagline
from . import url
from . import userdefined

class PersonAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    LESS_THAN_EIGHTEEN = "LESS_THAN_EIGHTEEN"
    EIGHTEEN_TO_TWENTY = "EIGHTEEN_TO_TWENTY"
    TWENTY_ONE_OR_OLDER = "TWENTY_ONE_OR_OLDER"


@dataclass_json
@dataclass
class Person:
    addresses: Optional[List[address.Address]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addresses' }})
    age_range: Optional[PersonAgeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRange' }})
    age_ranges: Optional[List[agerangetype.AgeRangeType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRanges' }})
    biographies: Optional[List[biography.Biography]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'biographies' }})
    birthdays: Optional[List[birthday.Birthday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthdays' }})
    bragging_rights: Optional[List[braggingrights.BraggingRights]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'braggingRights' }})
    calendar_urls: Optional[List[calendarurl.CalendarURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarUrls' }})
    client_data: Optional[List[clientdata.ClientData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientData' }})
    cover_photos: Optional[List[coverphoto.CoverPhoto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverPhotos' }})
    email_addresses: Optional[List[emailaddress.EmailAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddresses' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    events: Optional[List[event.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    external_ids: Optional[List[externalid.ExternalID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalIds' }})
    file_ases: Optional[List[fileas.FileAs]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileAses' }})
    genders: Optional[List[gender.Gender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genders' }})
    im_clients: Optional[List[imclient.ImClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imClients' }})
    interests: Optional[List[interest.Interest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interests' }})
    locales: Optional[List[locale.Locale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locales' }})
    locations: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    memberships: Optional[List[membership.Membership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    metadata: Optional[personmetadata.PersonMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    misc_keywords: Optional[List[misckeyword.MiscKeyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miscKeywords' }})
    names: Optional[List[name.Name]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    nicknames: Optional[List[nickname.Nickname]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nicknames' }})
    occupations: Optional[List[occupation.Occupation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occupations' }})
    organizations: Optional[List[organization.Organization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    phone_numbers: Optional[List[phonenumber.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumbers' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    relations: Optional[List[relation.Relation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relations' }})
    relationship_interests: Optional[List[relationshipinterest.RelationshipInterest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipInterests' }})
    relationship_statuses: Optional[List[relationshipstatus.RelationshipStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipStatuses' }})
    residences: Optional[List[residence.Residence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residences' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    sip_addresses: Optional[List[sipaddress.SipAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sipAddresses' }})
    skills: Optional[List[skill.Skill]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skills' }})
    taglines: Optional[List[tagline.Tagline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taglines' }})
    urls: Optional[List[url.URL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    user_defined: Optional[List[userdefined.UserDefined]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDefined' }})
    
