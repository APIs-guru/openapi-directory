from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PersonAgeRange:
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    

@dataclass_json
@dataclass
class PersonCoverCoverInfo:
    left_image_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leftImageOffset' }})
    top_image_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topImageOffset' }})
    

@dataclass_json
@dataclass
class PersonCoverCoverPhoto:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class PersonCover:
    cover_info: Optional[PersonCoverCoverInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverInfo' }})
    cover_photo: Optional[PersonCoverCoverPhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coverPhoto' }})
    layout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layout' }})
    

@dataclass_json
@dataclass
class PersonEmails:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PersonImage:
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PersonName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatted' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    honorific_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'honorificPrefix' }})
    honorific_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'honorificSuffix' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middleName' }})
    

@dataclass_json
@dataclass
class PersonOrganizations:
    department: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'department' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PersonPlacesLived:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class PersonUrls:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Person:
    about_me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aboutMe' }})
    age_range: Optional[PersonAgeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRange' }})
    birthday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthday' }})
    bragging_rights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'braggingRights' }})
    circled_by_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circledByCount' }})
    cover: Optional[PersonCover] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cover' }})
    current_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentLocation' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    emails: Optional[List[PersonEmails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[PersonImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    is_plus_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPlusUser' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: Optional[PersonName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nickname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nickname' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    occupation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occupation' }})
    organizations: Optional[List[PersonOrganizations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    places_lived: Optional[List[PersonPlacesLived]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placesLived' }})
    plus_one_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plusOneCount' }})
    relationship_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipStatus' }})
    skills: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skills' }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagline' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    urls: Optional[List[PersonUrls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
