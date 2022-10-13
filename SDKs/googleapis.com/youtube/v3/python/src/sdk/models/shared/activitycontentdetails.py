from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import activitycontentdetailsbulletin
from . import activitycontentdetailschannelitem
from . import activitycontentdetailscomment
from . import activitycontentdetailsfavorite
from . import activitycontentdetailslike
from . import activitycontentdetailsplaylistitem
from . import activitycontentdetailspromoteditem
from . import activitycontentdetailsrecommendation
from . import activitycontentdetailssocial
from . import activitycontentdetailssubscription
from . import activitycontentdetailsupload


@dataclass_json
@dataclass
class ActivityContentDetails:
    bulletin: Optional[activitycontentdetailsbulletin.ActivityContentDetailsBulletin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletin' }})
    channel_item: Optional[activitycontentdetailschannelitem.ActivityContentDetailsChannelItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelItem' }})
    comment: Optional[activitycontentdetailscomment.ActivityContentDetailsComment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    favorite: Optional[activitycontentdetailsfavorite.ActivityContentDetailsFavorite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favorite' }})
    like: Optional[activitycontentdetailslike.ActivityContentDetailsLike] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like' }})
    playlist_item: Optional[activitycontentdetailsplaylistitem.ActivityContentDetailsPlaylistItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlistItem' }})
    promoted_item: Optional[activitycontentdetailspromoteditem.ActivityContentDetailsPromotedItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotedItem' }})
    recommendation: Optional[activitycontentdetailsrecommendation.ActivityContentDetailsRecommendation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendation' }})
    social: Optional[activitycontentdetailssocial.ActivityContentDetailsSocial] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social' }})
    subscription: Optional[activitycontentdetailssubscription.ActivityContentDetailsSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    upload: Optional[activitycontentdetailsupload.ActivityContentDetailsUpload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    
