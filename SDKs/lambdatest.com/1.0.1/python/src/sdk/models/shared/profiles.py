from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfilesProfilesProfileConfigCredentials:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class ProfilesProfilesProfileConfigLocatorsPassword:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ProfilesProfilesProfileConfigLocatorsSubmit:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ProfilesProfilesProfileConfigLocatorsUsername:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ProfilesProfilesProfileConfigLocators:
    password: Optional[ProfilesProfilesProfileConfigLocatorsPassword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    submit: Optional[ProfilesProfilesProfileConfigLocatorsSubmit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submit') }})
    username: Optional[ProfilesProfilesProfileConfigLocatorsUsername] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class ProfilesProfilesProfileConfig:
    credentials: Optional[ProfilesProfilesProfileConfigCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    locators: Optional[ProfilesProfilesProfileConfigLocators] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locators') }})
    login_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_url') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_name') }})
    

@dataclass_json
@dataclass
class ProfilesProfiles:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile_config: Optional[ProfilesProfilesProfileConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_config') }})
    

@dataclass_json
@dataclass
class Profiles:
    profiles: Optional[List[ProfilesProfiles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profiles') }})
    
