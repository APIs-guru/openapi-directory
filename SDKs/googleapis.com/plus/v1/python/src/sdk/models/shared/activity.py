from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acl
from . import place


@dataclass_json
@dataclass
class ActivityActorClientSpecificActorInfoYoutubeActorInfo:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    

@dataclass_json
@dataclass
class ActivityActorClientSpecificActorInfo:
    youtube_actor_info: Optional[ActivityActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeActorInfo' }})
    

@dataclass_json
@dataclass
class ActivityActorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityActorName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class ActivityActorVerification:
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adHocVerified' }})
    

@dataclass_json
@dataclass
class ActivityActor:
    client_specific_actor_info: Optional[ActivityActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSpecificActorInfo' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[ActivityActorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    name: Optional[ActivityActorName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[ActivityActorVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    

@dataclass_json
@dataclass
class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    

@dataclass_json
@dataclass
class ActivityObjectActorClientSpecificActorInfo:
    youtube_actor_info: Optional[ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeActorInfo' }})
    

@dataclass_json
@dataclass
class ActivityObjectActorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityObjectActorVerification:
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adHocVerified' }})
    

@dataclass_json
@dataclass
class ActivityObjectActor:
    client_specific_actor_info: Optional[ActivityObjectActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSpecificActorInfo' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[ActivityObjectActorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[ActivityObjectActorVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsEmbed:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsFullImage:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsImage:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsThumbnailsImage:
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachmentsThumbnails:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    image: Optional[ActivityObjectAttachmentsThumbnailsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityObjectAttachments:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    embed: Optional[ActivityObjectAttachmentsEmbed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embed' }})
    full_image: Optional[ActivityObjectAttachmentsFullImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullImage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[ActivityObjectAttachmentsImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    thumbnails: Optional[List[ActivityObjectAttachmentsThumbnails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnails' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityObjectPlusoners:
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

@dataclass_json
@dataclass
class ActivityObjectReplies:
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

@dataclass_json
@dataclass
class ActivityObjectResharers:
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

@dataclass_json
@dataclass
class ActivityObject:
    actor: Optional[ActivityObjectActor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    attachments: Optional[List[ActivityObjectAttachments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    original_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalContent' }})
    plusoners: Optional[ActivityObjectPlusoners] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plusoners' }})
    replies: Optional[ActivityObjectReplies] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replies' }})
    resharers: Optional[ActivityObjectResharers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resharers' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ActivityProvider:
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class Activity:
    access: Optional[acl.ACL] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    actor: Optional[ActivityActor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation' }})
    crosspost_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crosspostSource' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    geocode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geocode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[place.Place] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    object: Optional[ActivityObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    place_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeName' }})
    provider: Optional[ActivityProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    radius: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verb' }})
    
