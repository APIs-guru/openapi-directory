from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UsersettingsNotesExport:
    r"""UsersettingsNotesExport
    User settings in sub-objects, each for different purposes.
    """
    
    folder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderName') }})
    is_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEnabled') }})
    

@dataclass_json
@dataclass
class UsersettingsNotificationMatchMyInterests:
    opted_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclass
class UsersettingsNotificationMoreFromAuthors:
    opted_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclass
class UsersettingsNotificationMoreFromSeries:
    opted_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclass
class UsersettingsNotificationPriceDrop:
    opted_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclass
class UsersettingsNotificationRewardExpirations:
    opted_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opted_state') }})
    

@dataclass_json
@dataclass
class UsersettingsNotification:
    match_my_interests: Optional[UsersettingsNotificationMatchMyInterests] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchMyInterests') }})
    more_from_authors: Optional[UsersettingsNotificationMoreFromAuthors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreFromAuthors') }})
    more_from_series: Optional[UsersettingsNotificationMoreFromSeries] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreFromSeries') }})
    price_drop: Optional[UsersettingsNotificationPriceDrop] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceDrop') }})
    reward_expirations: Optional[UsersettingsNotificationRewardExpirations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewardExpirations') }})
    

@dataclass_json
@dataclass
class Usersettings:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    notes_export: Optional[UsersettingsNotesExport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notesExport') }})
    notification: Optional[UsersettingsNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    
