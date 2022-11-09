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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// Groups
/**
 * JSON template for Group resource
**/
var Groups = /** @class */ (function (_super) {
    __extends(Groups, _super);
    function Groups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=allowExternalMembers" }),
        __metadata("design:type", String)
    ], Groups.prototype, "allowExternalMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=allowGoogleCommunication" }),
        __metadata("design:type", String)
    ], Groups.prototype, "allowGoogleCommunication", void 0);
    __decorate([
        Metadata({ data: "json, name=allowWebPosting" }),
        __metadata("design:type", String)
    ], Groups.prototype, "allowWebPosting", void 0);
    __decorate([
        Metadata({ data: "json, name=archiveOnly" }),
        __metadata("design:type", String)
    ], Groups.prototype, "archiveOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=customFooterText" }),
        __metadata("design:type", String)
    ], Groups.prototype, "customFooterText", void 0);
    __decorate([
        Metadata({ data: "json, name=customReplyTo" }),
        __metadata("design:type", String)
    ], Groups.prototype, "customReplyTo", void 0);
    __decorate([
        Metadata({ data: "json, name=customRolesEnabledForSettingsToBeMerged" }),
        __metadata("design:type", String)
    ], Groups.prototype, "customRolesEnabledForSettingsToBeMerged", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultMessageDenyNotificationText" }),
        __metadata("design:type", String)
    ], Groups.prototype, "defaultMessageDenyNotificationText", void 0);
    __decorate([
        Metadata({ data: "json, name=default_sender" }),
        __metadata("design:type", String)
    ], Groups.prototype, "defaultSender", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Groups.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Groups.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=enableCollaborativeInbox" }),
        __metadata("design:type", String)
    ], Groups.prototype, "enableCollaborativeInbox", void 0);
    __decorate([
        Metadata({ data: "json, name=favoriteRepliesOnTop" }),
        __metadata("design:type", String)
    ], Groups.prototype, "favoriteRepliesOnTop", void 0);
    __decorate([
        Metadata({ data: "json, name=includeCustomFooter" }),
        __metadata("design:type", String)
    ], Groups.prototype, "includeCustomFooter", void 0);
    __decorate([
        Metadata({ data: "json, name=includeInGlobalAddressList" }),
        __metadata("design:type", String)
    ], Groups.prototype, "includeInGlobalAddressList", void 0);
    __decorate([
        Metadata({ data: "json, name=isArchived" }),
        __metadata("design:type", String)
    ], Groups.prototype, "isArchived", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Groups.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=maxMessageBytes" }),
        __metadata("design:type", Number)
    ], Groups.prototype, "maxMessageBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=membersCanPostAsTheGroup" }),
        __metadata("design:type", String)
    ], Groups.prototype, "membersCanPostAsTheGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=messageDisplayFont" }),
        __metadata("design:type", String)
    ], Groups.prototype, "messageDisplayFont", void 0);
    __decorate([
        Metadata({ data: "json, name=messageModerationLevel" }),
        __metadata("design:type", String)
    ], Groups.prototype, "messageModerationLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Groups.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryLanguage" }),
        __metadata("design:type", String)
    ], Groups.prototype, "primaryLanguage", void 0);
    __decorate([
        Metadata({ data: "json, name=replyTo" }),
        __metadata("design:type", String)
    ], Groups.prototype, "replyTo", void 0);
    __decorate([
        Metadata({ data: "json, name=sendMessageDenyNotification" }),
        __metadata("design:type", String)
    ], Groups.prototype, "sendMessageDenyNotification", void 0);
    __decorate([
        Metadata({ data: "json, name=showInGroupDirectory" }),
        __metadata("design:type", String)
    ], Groups.prototype, "showInGroupDirectory", void 0);
    __decorate([
        Metadata({ data: "json, name=spamModerationLevel" }),
        __metadata("design:type", String)
    ], Groups.prototype, "spamModerationLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanAdd" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanAdd", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanAddReferences" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanAddReferences", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanApproveMembers" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanApproveMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanApproveMessages" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanApproveMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanAssignTopics" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanAssignTopics", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanAssistContent" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanAssistContent", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanBanUsers" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanBanUsers", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanContactOwner" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanContactOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanDeleteAnyPost" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanDeleteAnyPost", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanDeleteTopics" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanDeleteTopics", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanDiscoverGroup" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanDiscoverGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanEnterFreeFormTags" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanEnterFreeFormTags", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanHideAbuse" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanHideAbuse", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanInvite" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanInvite", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanJoin" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanJoin", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanLeaveGroup" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanLeaveGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanLockTopics" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanLockTopics", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMakeTopicsSticky" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMakeTopicsSticky", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMarkDuplicate" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMarkDuplicate", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMarkFavoriteReplyOnAnyTopic" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMarkFavoriteReplyOnAnyTopic", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMarkFavoriteReplyOnOwnTopic" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMarkFavoriteReplyOnOwnTopic", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMarkNoResponseNeeded" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMarkNoResponseNeeded", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanModerateContent" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanModerateContent", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanModerateMembers" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanModerateMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanModifyMembers" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanModifyMembers", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanModifyTagsAndCategories" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanModifyTagsAndCategories", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMoveTopicsIn" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMoveTopicsIn", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanMoveTopicsOut" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanMoveTopicsOut", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanPostAnnouncements" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanPostAnnouncements", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanPostMessage" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanPostMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanTakeTopics" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanTakeTopics", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanUnassignTopic" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanUnassignTopic", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanUnmarkFavoriteReplyOnAnyTopic" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanUnmarkFavoriteReplyOnAnyTopic", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanViewGroup" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanViewGroup", void 0);
    __decorate([
        Metadata({ data: "json, name=whoCanViewMembership" }),
        __metadata("design:type", String)
    ], Groups.prototype, "whoCanViewMembership", void 0);
    return Groups;
}(SpeakeasyBase));
export { Groups };
