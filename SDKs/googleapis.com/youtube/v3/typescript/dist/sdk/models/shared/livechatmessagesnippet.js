var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
export var LiveChatMessageSnippetTypeEnum;
(function (LiveChatMessageSnippetTypeEnum) {
    LiveChatMessageSnippetTypeEnum["InvalidType"] = "invalidType";
    LiveChatMessageSnippetTypeEnum["TextMessageEvent"] = "textMessageEvent";
    LiveChatMessageSnippetTypeEnum["Tombstone"] = "tombstone";
    LiveChatMessageSnippetTypeEnum["FanFundingEvent"] = "fanFundingEvent";
    LiveChatMessageSnippetTypeEnum["ChatEndedEvent"] = "chatEndedEvent";
    LiveChatMessageSnippetTypeEnum["SponsorOnlyModeStartedEvent"] = "sponsorOnlyModeStartedEvent";
    LiveChatMessageSnippetTypeEnum["SponsorOnlyModeEndedEvent"] = "sponsorOnlyModeEndedEvent";
    LiveChatMessageSnippetTypeEnum["NewSponsorEvent"] = "newSponsorEvent";
    LiveChatMessageSnippetTypeEnum["MemberMilestoneChatEvent"] = "memberMilestoneChatEvent";
    LiveChatMessageSnippetTypeEnum["MembershipGiftingEvent"] = "membershipGiftingEvent";
    LiveChatMessageSnippetTypeEnum["GiftMembershipReceivedEvent"] = "giftMembershipReceivedEvent";
    LiveChatMessageSnippetTypeEnum["MessageDeletedEvent"] = "messageDeletedEvent";
    LiveChatMessageSnippetTypeEnum["MessageRetractedEvent"] = "messageRetractedEvent";
    LiveChatMessageSnippetTypeEnum["UserBannedEvent"] = "userBannedEvent";
    LiveChatMessageSnippetTypeEnum["SuperChatEvent"] = "superChatEvent";
    LiveChatMessageSnippetTypeEnum["SuperStickerEvent"] = "superStickerEvent";
})(LiveChatMessageSnippetTypeEnum || (LiveChatMessageSnippetTypeEnum = {}));
// LiveChatMessageSnippet
/**
 * Next ID: 33
**/
var LiveChatMessageSnippet = /** @class */ (function (_super) {
    __extends(LiveChatMessageSnippet, _super);
    function LiveChatMessageSnippet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorChannelId" }),
        __metadata("design:type", String)
    ], LiveChatMessageSnippet.prototype, "authorChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayMessage" }),
        __metadata("design:type", String)
    ], LiveChatMessageSnippet.prototype, "displayMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fanFundingEventDetails" }),
        __metadata("design:type", LiveChatFanFundingEventDetails)
    ], LiveChatMessageSnippet.prototype, "fanFundingEventDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=giftMembershipReceivedDetails" }),
        __metadata("design:type", LiveChatGiftMembershipReceivedDetails)
    ], LiveChatMessageSnippet.prototype, "giftMembershipReceivedDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDisplayContent" }),
        __metadata("design:type", Boolean)
    ], LiveChatMessageSnippet.prototype, "hasDisplayContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveChatId" }),
        __metadata("design:type", String)
    ], LiveChatMessageSnippet.prototype, "liveChatId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberMilestoneChatDetails" }),
        __metadata("design:type", LiveChatMemberMilestoneChatDetails)
    ], LiveChatMessageSnippet.prototype, "memberMilestoneChatDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=membershipGiftingDetails" }),
        __metadata("design:type", LiveChatMembershipGiftingDetails)
    ], LiveChatMessageSnippet.prototype, "membershipGiftingDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageDeletedDetails" }),
        __metadata("design:type", LiveChatMessageDeletedDetails)
    ], LiveChatMessageSnippet.prototype, "messageDeletedDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messageRetractedDetails" }),
        __metadata("design:type", LiveChatMessageRetractedDetails)
    ], LiveChatMessageSnippet.prototype, "messageRetractedDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newSponsorDetails" }),
        __metadata("design:type", LiveChatNewSponsorDetails)
    ], LiveChatMessageSnippet.prototype, "newSponsorDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedAt" }),
        __metadata("design:type", Date)
    ], LiveChatMessageSnippet.prototype, "publishedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=superChatDetails" }),
        __metadata("design:type", LiveChatSuperChatDetails)
    ], LiveChatMessageSnippet.prototype, "superChatDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=superStickerDetails" }),
        __metadata("design:type", LiveChatSuperStickerDetails)
    ], LiveChatMessageSnippet.prototype, "superStickerDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textMessageDetails" }),
        __metadata("design:type", LiveChatTextMessageDetails)
    ], LiveChatMessageSnippet.prototype, "textMessageDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LiveChatMessageSnippet.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userBannedDetails" }),
        __metadata("design:type", LiveChatUserBannedMessageDetails)
    ], LiveChatMessageSnippet.prototype, "userBannedDetails", void 0);
    return LiveChatMessageSnippet;
}(SpeakeasyBase));
export { LiveChatMessageSnippet };
