from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import livechatfanfundingeventdetails
from . import livechatgiftmembershipreceiveddetails
from . import livechatmembermilestonechatdetails
from . import livechatmembershipgiftingdetails
from . import livechatmessagedeleteddetails
from . import livechatmessageretracteddetails
from . import livechatnewsponsordetails
from . import livechatsuperchatdetails
from . import livechatsuperstickerdetails
from . import livechattextmessagedetails
from . import livechatuserbannedmessagedetails

class LiveChatMessageSnippetTypeEnum(str, Enum):
    INVALID_TYPE = "invalidType"
    TEXT_MESSAGE_EVENT = "textMessageEvent"
    TOMBSTONE = "tombstone"
    FAN_FUNDING_EVENT = "fanFundingEvent"
    CHAT_ENDED_EVENT = "chatEndedEvent"
    SPONSOR_ONLY_MODE_STARTED_EVENT = "sponsorOnlyModeStartedEvent"
    SPONSOR_ONLY_MODE_ENDED_EVENT = "sponsorOnlyModeEndedEvent"
    NEW_SPONSOR_EVENT = "newSponsorEvent"
    MEMBER_MILESTONE_CHAT_EVENT = "memberMilestoneChatEvent"
    MEMBERSHIP_GIFTING_EVENT = "membershipGiftingEvent"
    GIFT_MEMBERSHIP_RECEIVED_EVENT = "giftMembershipReceivedEvent"
    MESSAGE_DELETED_EVENT = "messageDeletedEvent"
    MESSAGE_RETRACTED_EVENT = "messageRetractedEvent"
    USER_BANNED_EVENT = "userBannedEvent"
    SUPER_CHAT_EVENT = "superChatEvent"
    SUPER_STICKER_EVENT = "superStickerEvent"


@dataclass_json
@dataclass
class LiveChatMessageSnippet:
    author_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorChannelId' }})
    display_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayMessage' }})
    fan_funding_event_details: Optional[livechatfanfundingeventdetails.LiveChatFanFundingEventDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fanFundingEventDetails' }})
    gift_membership_received_details: Optional[livechatgiftmembershipreceiveddetails.LiveChatGiftMembershipReceivedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'giftMembershipReceivedDetails' }})
    has_display_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDisplayContent' }})
    live_chat_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveChatId' }})
    member_milestone_chat_details: Optional[livechatmembermilestonechatdetails.LiveChatMemberMilestoneChatDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberMilestoneChatDetails' }})
    membership_gifting_details: Optional[livechatmembershipgiftingdetails.LiveChatMembershipGiftingDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipGiftingDetails' }})
    message_deleted_details: Optional[livechatmessagedeleteddetails.LiveChatMessageDeletedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageDeletedDetails' }})
    message_retracted_details: Optional[livechatmessageretracteddetails.LiveChatMessageRetractedDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageRetractedDetails' }})
    new_sponsor_details: Optional[livechatnewsponsordetails.LiveChatNewSponsorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newSponsorDetails' }})
    published_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    super_chat_details: Optional[livechatsuperchatdetails.LiveChatSuperChatDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'superChatDetails' }})
    super_sticker_details: Optional[livechatsuperstickerdetails.LiveChatSuperStickerDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'superStickerDetails' }})
    text_message_details: Optional[livechattextmessagedetails.LiveChatTextMessageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textMessageDetails' }})
    type: Optional[LiveChatMessageSnippetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_banned_details: Optional[livechatuserbannedmessagedetails.LiveChatUserBannedMessageDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userBannedDetails' }})
    
