from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommentActorClientSpecificActorInfoYoutubeActorInfo:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    

@dataclass_json
@dataclass
class CommentActorClientSpecificActorInfo:
    youtube_actor_info: Optional[CommentActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'youtubeActorInfo' }})
    

@dataclass_json
@dataclass
class CommentActorImage:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommentActorVerification:
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adHocVerified' }})
    

@dataclass_json
@dataclass
class CommentActor:
    client_specific_actor_info: Optional[CommentActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSpecificActorInfo' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[CommentActorImage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification: Optional[CommentActorVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification' }})
    

@dataclass_json
@dataclass
class CommentInReplyTo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class CommentObject:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType' }})
    original_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalContent' }})
    

@dataclass_json
@dataclass
class CommentPlusoners:
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

@dataclass_json
@dataclass
class Comment:
    actor: Optional[CommentActor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_reply_to: Optional[List[CommentInReplyTo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inReplyTo' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    object: Optional[CommentObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    plusoners: Optional[CommentPlusoners] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plusoners' }})
    published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verb' }})
    
