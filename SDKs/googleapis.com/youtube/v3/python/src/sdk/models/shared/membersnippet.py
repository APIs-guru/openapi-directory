from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channelprofiledetails
from . import membershipsdetails


@dataclass_json
@dataclass
class MemberSnippet:
    creator_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorChannelId' }})
    member_details: Optional[channelprofiledetails.ChannelProfileDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberDetails' }})
    memberships_details: Optional[membershipsdetails.MembershipsDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipsDetails' }})
    
