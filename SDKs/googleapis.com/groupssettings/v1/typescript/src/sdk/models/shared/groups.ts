import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Groups
/** 
 * JSON template for Group resource
**/
export class Groups extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowExternalMembers" })
  allowExternalMembers?: string;

  @Metadata({ data: "json, name=allowGoogleCommunication" })
  allowGoogleCommunication?: string;

  @Metadata({ data: "json, name=allowWebPosting" })
  allowWebPosting?: string;

  @Metadata({ data: "json, name=archiveOnly" })
  archiveOnly?: string;

  @Metadata({ data: "json, name=customFooterText" })
  customFooterText?: string;

  @Metadata({ data: "json, name=customReplyTo" })
  customReplyTo?: string;

  @Metadata({ data: "json, name=customRolesEnabledForSettingsToBeMerged" })
  customRolesEnabledForSettingsToBeMerged?: string;

  @Metadata({ data: "json, name=defaultMessageDenyNotificationText" })
  defaultMessageDenyNotificationText?: string;

  @Metadata({ data: "json, name=default_sender" })
  defaultSender?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=enableCollaborativeInbox" })
  enableCollaborativeInbox?: string;

  @Metadata({ data: "json, name=favoriteRepliesOnTop" })
  favoriteRepliesOnTop?: string;

  @Metadata({ data: "json, name=includeCustomFooter" })
  includeCustomFooter?: string;

  @Metadata({ data: "json, name=includeInGlobalAddressList" })
  includeInGlobalAddressList?: string;

  @Metadata({ data: "json, name=isArchived" })
  isArchived?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maxMessageBytes" })
  maxMessageBytes?: number;

  @Metadata({ data: "json, name=membersCanPostAsTheGroup" })
  membersCanPostAsTheGroup?: string;

  @Metadata({ data: "json, name=messageDisplayFont" })
  messageDisplayFont?: string;

  @Metadata({ data: "json, name=messageModerationLevel" })
  messageModerationLevel?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryLanguage" })
  primaryLanguage?: string;

  @Metadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @Metadata({ data: "json, name=sendMessageDenyNotification" })
  sendMessageDenyNotification?: string;

  @Metadata({ data: "json, name=showInGroupDirectory" })
  showInGroupDirectory?: string;

  @Metadata({ data: "json, name=spamModerationLevel" })
  spamModerationLevel?: string;

  @Metadata({ data: "json, name=whoCanAdd" })
  whoCanAdd?: string;

  @Metadata({ data: "json, name=whoCanAddReferences" })
  whoCanAddReferences?: string;

  @Metadata({ data: "json, name=whoCanApproveMembers" })
  whoCanApproveMembers?: string;

  @Metadata({ data: "json, name=whoCanApproveMessages" })
  whoCanApproveMessages?: string;

  @Metadata({ data: "json, name=whoCanAssignTopics" })
  whoCanAssignTopics?: string;

  @Metadata({ data: "json, name=whoCanAssistContent" })
  whoCanAssistContent?: string;

  @Metadata({ data: "json, name=whoCanBanUsers" })
  whoCanBanUsers?: string;

  @Metadata({ data: "json, name=whoCanContactOwner" })
  whoCanContactOwner?: string;

  @Metadata({ data: "json, name=whoCanDeleteAnyPost" })
  whoCanDeleteAnyPost?: string;

  @Metadata({ data: "json, name=whoCanDeleteTopics" })
  whoCanDeleteTopics?: string;

  @Metadata({ data: "json, name=whoCanDiscoverGroup" })
  whoCanDiscoverGroup?: string;

  @Metadata({ data: "json, name=whoCanEnterFreeFormTags" })
  whoCanEnterFreeFormTags?: string;

  @Metadata({ data: "json, name=whoCanHideAbuse" })
  whoCanHideAbuse?: string;

  @Metadata({ data: "json, name=whoCanInvite" })
  whoCanInvite?: string;

  @Metadata({ data: "json, name=whoCanJoin" })
  whoCanJoin?: string;

  @Metadata({ data: "json, name=whoCanLeaveGroup" })
  whoCanLeaveGroup?: string;

  @Metadata({ data: "json, name=whoCanLockTopics" })
  whoCanLockTopics?: string;

  @Metadata({ data: "json, name=whoCanMakeTopicsSticky" })
  whoCanMakeTopicsSticky?: string;

  @Metadata({ data: "json, name=whoCanMarkDuplicate" })
  whoCanMarkDuplicate?: string;

  @Metadata({ data: "json, name=whoCanMarkFavoriteReplyOnAnyTopic" })
  whoCanMarkFavoriteReplyOnAnyTopic?: string;

  @Metadata({ data: "json, name=whoCanMarkFavoriteReplyOnOwnTopic" })
  whoCanMarkFavoriteReplyOnOwnTopic?: string;

  @Metadata({ data: "json, name=whoCanMarkNoResponseNeeded" })
  whoCanMarkNoResponseNeeded?: string;

  @Metadata({ data: "json, name=whoCanModerateContent" })
  whoCanModerateContent?: string;

  @Metadata({ data: "json, name=whoCanModerateMembers" })
  whoCanModerateMembers?: string;

  @Metadata({ data: "json, name=whoCanModifyMembers" })
  whoCanModifyMembers?: string;

  @Metadata({ data: "json, name=whoCanModifyTagsAndCategories" })
  whoCanModifyTagsAndCategories?: string;

  @Metadata({ data: "json, name=whoCanMoveTopicsIn" })
  whoCanMoveTopicsIn?: string;

  @Metadata({ data: "json, name=whoCanMoveTopicsOut" })
  whoCanMoveTopicsOut?: string;

  @Metadata({ data: "json, name=whoCanPostAnnouncements" })
  whoCanPostAnnouncements?: string;

  @Metadata({ data: "json, name=whoCanPostMessage" })
  whoCanPostMessage?: string;

  @Metadata({ data: "json, name=whoCanTakeTopics" })
  whoCanTakeTopics?: string;

  @Metadata({ data: "json, name=whoCanUnassignTopic" })
  whoCanUnassignTopic?: string;

  @Metadata({ data: "json, name=whoCanUnmarkFavoriteReplyOnAnyTopic" })
  whoCanUnmarkFavoriteReplyOnAnyTopic?: string;

  @Metadata({ data: "json, name=whoCanViewGroup" })
  whoCanViewGroup?: string;

  @Metadata({ data: "json, name=whoCanViewMembership" })
  whoCanViewMembership?: string;
}
