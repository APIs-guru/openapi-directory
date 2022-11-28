from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PersonAgeRange:
    r"""PersonAgeRange
    The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
    """
    
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    

@dataclass_json
@dataclass
class PersonCoverCoverInfo:
    r"""PersonCoverCoverInfo
    Extra information about the cover photo.
    """
    
    left_image_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftImageOffset') }})
    top_image_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topImageOffset') }})
    

@dataclass_json
@dataclass
class PersonCoverCoverPhoto:
    r"""PersonCoverCoverPhoto
    The person's primary cover image.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class PersonCover:
    r"""PersonCover
    The cover photo content.
    """
    
    cover_info: Optional[PersonCoverCoverInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverInfo') }})
    cover_photo: Optional[PersonCoverCoverPhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPhoto') }})
    layout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layout') }})
    

@dataclass_json
@dataclass
class PersonEmails:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PersonImage:
    r"""PersonImage
    The representation of the person's profile photo.
    """
    
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PersonName:
    r"""PersonName
    An object representation of the individual components of a person's name.
    """
    
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    honorific_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificPrefix') }})
    honorific_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('honorificSuffix') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleName') }})
    

@dataclass_json
@dataclass
class PersonOrganizations:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PersonPlacesLived:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class PersonUrls:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class Person:
    about_me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aboutMe') }})
    age_range: Optional[PersonAgeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRange') }})
    birthday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('birthday') }})
    bragging_rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('braggingRights') }})
    circled_by_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circledByCount') }})
    cover: Optional[PersonCover] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover') }})
    current_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentLocation') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    emails: Optional[List[PersonEmails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[PersonImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    is_plus_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPlusUser') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: Optional[PersonName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickname') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    occupation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupation') }})
    organizations: Optional[List[PersonOrganizations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    places_lived: Optional[List[PersonPlacesLived]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placesLived') }})
    plus_one_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusOneCount') }})
    relationship_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipStatus') }})
    skills: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagline') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    urls: Optional[List[PersonUrls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    
