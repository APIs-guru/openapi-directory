from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyticsInfo:
    r"""AnalyticsInfo
    Tracking parameters supported by Dynamic Link.
    """
    
    google_play_analytics: Optional[GooglePlayAnalytics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePlayAnalytics') }})
    itunes_connect_analytics: Optional[ITunesConnectAnalytics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itunesConnectAnalytics') }})
    
