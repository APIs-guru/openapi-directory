import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


// LiveChatMessageSnippet
/** 
 * Next ID: 33
**/
export class LiveChatMessageSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorChannelId" })
  authorChannelId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayMessage" })
  displayMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fanFundingEventDetails" })
  fanFundingEventDetails?: LiveChatFanFundingEventDetails;

  @SpeakeasyMetadata({ data: "json, name=giftMembershipReceivedDetails" })
  giftMembershipReceivedDetails?: LiveChatGiftMembershipReceivedDetails;

  @SpeakeasyMetadata({ data: "json, name=hasDisplayContent" })
  hasDisplayContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=liveChatId" })
  liveChatId?: string;

  @SpeakeasyMetadata({ data: "json, name=memberMilestoneChatDetails" })
  memberMilestoneChatDetails?: LiveChatMemberMilestoneChatDetails;

  @SpeakeasyMetadata({ data: "json, name=membershipGiftingDetails" })
  membershipGiftingDetails?: LiveChatMembershipGiftingDetails;

  @SpeakeasyMetadata({ data: "json, name=messageDeletedDetails" })
  messageDeletedDetails?: LiveChatMessageDeletedDetails;

  @SpeakeasyMetadata({ data: "json, name=messageRetractedDetails" })
  messageRetractedDetails?: LiveChatMessageRetractedDetails;

  @SpeakeasyMetadata({ data: "json, name=newSponsorDetails" })
  newSponsorDetails?: LiveChatNewSponsorDetails;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=superChatDetails" })
  superChatDetails?: LiveChatSuperChatDetails;

  @SpeakeasyMetadata({ data: "json, name=superStickerDetails" })
  superStickerDetails?: LiveChatSuperStickerDetails;

  @SpeakeasyMetadata({ data: "json, name=textMessageDetails" })
  textMessageDetails?: LiveChatTextMessageDetails;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LiveChatMessageSnippetTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userBannedDetails" })
  userBannedDetails?: LiveChatUserBannedMessageDetails;
}
