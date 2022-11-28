from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityActorClientSpecificActorInfoYoutubeActorInfo:
    r"""ActivityActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclass
class ActivityActorClientSpecificActorInfo:
    r"""ActivityActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[ActivityActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclass
class ActivityActorImage:
    r"""ActivityActorImage
    The image representation of the actor.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityActorName:
    r"""ActivityActorName
    An object representation of the individual components of name.
    """
    
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclass
class ActivityActorVerification:
    r"""ActivityActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclass
class ActivityActor:
    r"""ActivityActor
    The person who performed this activity.
    """
    
    client_specific_actor_info: Optional[ActivityActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityActorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    name: Optional[ActivityActorName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[ActivityActorVerification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclass
class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo:
    r"""ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclass
class ActivityObjectActorClientSpecificActorInfo:
    r"""ActivityObjectActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclass
class ActivityObjectActorImage:
    r"""ActivityObjectActorImage
    The image representation of the original actor.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityObjectActorVerification:
    r"""ActivityObjectActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclass
class ActivityObjectActor:
    r"""ActivityObjectActor
    If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
    """
    
    client_specific_actor_info: Optional[ActivityObjectActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityObjectActorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[ActivityObjectActorVerification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsEmbed:
    r"""ActivityObjectAttachmentsEmbed
    If the attachment is a video, the embeddable link.
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsFullImage:
    r"""ActivityObjectAttachmentsFullImage
    The full image URL for photo attachments.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsImage:
    r"""ActivityObjectAttachmentsImage
    The preview image for photos or videos.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsThumbnailsImage:
    r"""ActivityObjectAttachmentsThumbnailsImage
    Image resource.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsThumbnails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    image: Optional[ActivityObjectAttachmentsThumbnailsImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachments:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    embed: Optional[ActivityObjectAttachmentsEmbed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embed') }})
    full_image: Optional[ActivityObjectAttachmentsFullImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullImage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[ActivityObjectAttachmentsImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    thumbnails: Optional[List[ActivityObjectAttachmentsThumbnails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnails') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityObjectPlusoners:
    r"""ActivityObjectPlusoners
    People who +1'd this activity.
    """
    
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclass
class ActivityObjectReplies:
    r"""ActivityObjectReplies
    Comments in reply to this activity.
    """
    
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclass
class ActivityObjectResharers:
    r"""ActivityObjectResharers
    People who reshared this activity.
    """
    
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclass
class ActivityObject:
    r"""ActivityObject
    The object of this activity.
    """
    
    actor: Optional[ActivityObjectActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    attachments: Optional[List[ActivityObjectAttachments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    original_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalContent') }})
    plusoners: Optional[ActivityObjectPlusoners] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusoners') }})
    replies: Optional[ActivityObjectReplies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    resharers: Optional[ActivityObjectResharers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resharers') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ActivityProvider:
    r"""ActivityProvider
    The service provider that initially published this activity.
    """
    
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Activity:
    access: Optional[ACL] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    actor: Optional[ActivityActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotation') }})
    crosspost_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crosspostSource') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    geocode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geocode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    location: Optional[Place] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    object: Optional[ActivityObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    place_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeName') }})
    provider: Optional[ActivityProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    radius: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    
