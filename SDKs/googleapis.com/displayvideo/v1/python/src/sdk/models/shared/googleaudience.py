from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAudienceGoogleAudienceTypeEnum(str, Enum):
    GOOGLE_AUDIENCE_TYPE_UNSPECIFIED = "GOOGLE_AUDIENCE_TYPE_UNSPECIFIED"
    GOOGLE_AUDIENCE_TYPE_AFFINITY = "GOOGLE_AUDIENCE_TYPE_AFFINITY"
    GOOGLE_AUDIENCE_TYPE_IN_MARKET = "GOOGLE_AUDIENCE_TYPE_IN_MARKET"
    GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS = "GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS"
    GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES = "GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES"
    GOOGLE_AUDIENCE_TYPE_LIFE_EVENT = "GOOGLE_AUDIENCE_TYPE_LIFE_EVENT"
    GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC = "GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC"


@dataclass_json
@dataclass
class GoogleAudience:
    r"""GoogleAudience
    Describes a Google audience resource. Includes Google audience lists.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    google_audience_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAudienceId') }})
    google_audience_type: Optional[GoogleAudienceGoogleAudienceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleAudienceType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
