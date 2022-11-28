import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatFanFundingEventDetails } from "./livechatfanfundingeventdetails";
import { LiveChatGiftMembershipReceivedDetails } from "./livechatgiftmembershipreceiveddetails";
import { LiveChatMemberMilestoneChatDetails } from "./livechatmembermilestonechatdetails";
import { LiveChatMembershipGiftingDetails } from "./livechatmembershipgiftingdetails";
import { LiveChatMessageDeletedDetails } from "./livechatmessagedeleteddetails";
import { LiveChatMessageRetractedDetails } from "./livechatmessageretracteddetails";
import { LiveChatNewSponsorDetails } from "./livechatnewsponsordetails";
import { LiveChatSuperChatDetails } from "./livechatsuperchatdetails";
import { LiveChatSuperStickerDetails } from "./livechatsuperstickerdetails";
import { LiveChatTextMessageDetails } from "./livechattextmessagedetails";
import { LiveChatUserBannedMessageDetails } from "./livechatuserbannedmessagedetails";
export declare enum LiveChatMessageSnippetTypeEnum {
    InvalidType = "invalidType",
    TextMessageEvent = "textMessageEvent",
    Tombstone = "tombstone",
    FanFundingEvent = "fanFundingEvent",
    ChatEndedEvent = "chatEndedEvent",
    SponsorOnlyModeStartedEvent = "sponsorOnlyModeStartedEvent",
    SponsorOnlyModeEndedEvent = "sponsorOnlyModeEndedEvent",
    NewSponsorEvent = "newSponsorEvent",
    MemberMilestoneChatEvent = "memberMilestoneChatEvent",
    MembershipGiftingEvent = "membershipGiftingEvent",
    GiftMembershipReceivedEvent = "giftMembershipReceivedEvent",
    MessageDeletedEvent = "messageDeletedEvent",
    MessageRetractedEvent = "messageRetractedEvent",
    UserBannedEvent = "userBannedEvent",
    SuperChatEvent = "superChatEvent",
    SuperStickerEvent = "superStickerEvent"
}
/**
 * Next ID: 33
**/
export declare class LiveChatMessageSnippet extends SpeakeasyBase {
    authorChannelId?: string;
    displayMessage?: string;
    fanFundingEventDetails?: LiveChatFanFundingEventDetails;
    giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;
    hasDisplayContent?: boolean;
    liveChatId?: string;
    memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;
    membershipGiftingDetails?: LiveChatMembershipGiftingDetails;
    messageDeletedDetails?: LiveChatMessageDeletedDetails;
    messageRetractedDetails?: LiveChatMessageRetractedDetails;
    newSponsorDetails?: LiveChatNewSponsorDetails;
    publishedAt?: Date;
    superChatDetails?: LiveChatSuperChatDetails;
    superStickerDetails?: LiveChatSuperStickerDetails;
    textMessageDetails?: LiveChatTextMessageDetails;
    type?: LiveChatMessageSnippetTypeEnum;
    userBannedDetails?: LiveChatUserBannedMessageDetails;
}
