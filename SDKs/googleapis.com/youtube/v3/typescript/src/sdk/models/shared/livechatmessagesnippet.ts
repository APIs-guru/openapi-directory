import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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

export enum LiveChatMessageSnippetTypeEnum {
    InvalidType = "invalidType"
,    TextMessageEvent = "textMessageEvent"
,    Tombstone = "tombstone"
,    FanFundingEvent = "fanFundingEvent"
,    ChatEndedEvent = "chatEndedEvent"
,    SponsorOnlyModeStartedEvent = "sponsorOnlyModeStartedEvent"
,    SponsorOnlyModeEndedEvent = "sponsorOnlyModeEndedEvent"
,    NewSponsorEvent = "newSponsorEvent"
,    MemberMilestoneChatEvent = "memberMilestoneChatEvent"
,    MembershipGiftingEvent = "membershipGiftingEvent"
,    GiftMembershipReceivedEvent = "giftMembershipReceivedEvent"
,    MessageDeletedEvent = "messageDeletedEvent"
,    MessageRetractedEvent = "messageRetractedEvent"
,    UserBannedEvent = "userBannedEvent"
,    SuperChatEvent = "superChatEvent"
,    SuperStickerEvent = "superStickerEvent"
}


// LiveChatMessageSnippet
/** 
 * Next ID: 33
**/
export class LiveChatMessageSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorChannelId" })
  authorChannelId?: string;

  @Metadata({ data: "json, name=displayMessage" })
  displayMessage?: string;

  @Metadata({ data: "json, name=fanFundingEventDetails" })
  fanFundingEventDetails?: LiveChatFanFundingEventDetails;

  @Metadata({ data: "json, name=giftMembershipReceivedDetails" })
  giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;

  @Metadata({ data: "json, name=hasDisplayContent" })
  hasDisplayContent?: boolean;

  @Metadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @Metadata({ data: "json, name=memberMilestoneChatDetails" })
  memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;

  @Metadata({ data: "json, name=membershipGiftingDetails" })
  membershipGiftingDetails?: LiveChatMembershipGiftingDetails;

  @Metadata({ data: "json, name=messageDeletedDetails" })
  messageDeletedDetails?: LiveChatMessageDeletedDetails;

  @Metadata({ data: "json, name=messageRetractedDetails" })
  messageRetractedDetails?: LiveChatMessageRetractedDetails;

  @Metadata({ data: "json, name=newSponsorDetails" })
  newSponsorDetails?: LiveChatNewSponsorDetails;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=superChatDetails" })
  superChatDetails?: LiveChatSuperChatDetails;

  @Metadata({ data: "json, name=superStickerDetails" })
  superStickerDetails?: LiveChatSuperStickerDetails;

  @Metadata({ data: "json, name=textMessageDetails" })
  textMessageDetails?: LiveChatTextMessageDetails;

  @Metadata({ data: "json, name=type" })
  type?: LiveChatMessageSnippetTypeEnum;

  @Metadata({ data: "json, name=userBannedDetails" })
  userBannedDetails?: LiveChatUserBannedMessageDetails;
}
