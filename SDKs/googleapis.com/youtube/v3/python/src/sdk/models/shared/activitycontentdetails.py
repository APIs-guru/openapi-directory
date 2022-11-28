from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityContentDetails:
    r"""ActivityContentDetails
    Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
    """
    
    bulletin: Optional[ActivityContentDetailsBulletin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletin') }})
    channel_item: Optional[ActivityContentDetailsChannelItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelItem') }})
    comment: Optional[ActivityContentDetailsComment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    favorite: Optional[ActivityContentDetailsFavorite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    like: Optional[ActivityContentDetailsLike] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('like') }})
    playlist_item: Optional[ActivityContentDetailsPlaylistItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistItem') }})
    promoted_item: Optional[ActivityContentDetailsPromotedItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotedItem') }})
    recommendation: Optional[ActivityContentDetailsRecommendation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendation') }})
    social: Optional[ActivityContentDetailsSocial] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('social') }})
    subscription: Optional[ActivityContentDetailsSubscription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    upload: Optional[ActivityContentDetailsUpload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
