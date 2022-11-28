from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommentActorClientSpecificActorInfoYoutubeActorInfo:
    r"""CommentActorClientSpecificActorInfoYoutubeActorInfo
    Actor info specific to YouTube clients.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    

@dataclass_json
@dataclass
class CommentActorClientSpecificActorInfo:
    r"""CommentActorClientSpecificActorInfo
    Actor info specific to particular clients.
    """
    
    youtube_actor_info: Optional[CommentActorClientSpecificActorInfoYoutubeActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtubeActorInfo') }})
    

@dataclass_json
@dataclass
class CommentActorImage:
    r"""CommentActorImage
    The image representation of this actor.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommentActorVerification:
    r"""CommentActorVerification
    Verification status of actor.
    """
    
    ad_hoc_verified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adHocVerified') }})
    

@dataclass_json
@dataclass
class CommentActor:
    r"""CommentActor
    The person who posted this comment.
    """
    
    client_specific_actor_info: Optional[CommentActorClientSpecificActorInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSpecificActorInfo') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image: Optional[CommentActorImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: Optional[CommentActorVerification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    

@dataclass_json
@dataclass
class CommentInReplyTo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class CommentObject:
    r"""CommentObject
    The object of this comment.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    original_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalContent') }})
    

@dataclass_json
@dataclass
class CommentPlusoners:
    r"""CommentPlusoners
    People who +1'd this comment.
    """
    
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

@dataclass_json
@dataclass
class Comment:
    actor: Optional[CommentActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_reply_to: Optional[List[CommentInReplyTo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inReplyTo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object: Optional[CommentObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    plusoners: Optional[CommentPlusoners] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plusoners') }})
    published: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    verb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verb') }})
    
