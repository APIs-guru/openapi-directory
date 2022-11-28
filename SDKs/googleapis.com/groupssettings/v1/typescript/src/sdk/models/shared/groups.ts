import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Groups
/** 
 * JSON template for Group resource
**/
export class Groups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowExternalMembers" })
  allowExternalMembers?: string;

  @SpeakeasyMetadata({ data: "json, name=allowGoogleCommunication" })
  allowGoogleCommunication?: string;

  @SpeakeasyMetadata({ data: "json, name=allowWebPosting" })
  allowWebPosting?: string;

  @SpeakeasyMetadata({ data: "json, name=archiveOnly" })
  archiveOnly?: string;

  @SpeakeasyMetadata({ data: "json, name=customFooterText" })
  customFooterText?: string;

  @SpeakeasyMetadata({ data: "json, name=customReplyTo" })
  customReplyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=customRolesEnabledForSettingsToBeMerged" })
  customRolesEnabledForSettingsToBeMerged?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultMessageDenyNotificationText" })
  defaultMessageDenyNotificationText?: string;

  @SpeakeasyMetadata({ data: "json, name=default_sender" })
  defaultSender?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=enableCollaborativeInbox" })
  enableCollaborativeInbox?: string;

  @SpeakeasyMetadata({ data: "json, name=favoriteRepliesOnTop" })
  favoriteRepliesOnTop?: string;

  @SpeakeasyMetadata({ data: "json, name=includeCustomFooter" })
  includeCustomFooter?: string;

  @SpeakeasyMetadata({ data: "json, name=includeInGlobalAddressList" })
  includeInGlobalAddressList?: string;

  @SpeakeasyMetadata({ data: "json, name=isArchived" })
  isArchived?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=maxMessageBytes" })
  maxMessageBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=membersCanPostAsTheGroup" })
  membersCanPostAsTheGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=messageDisplayFont" })
  messageDisplayFont?: string;

  @SpeakeasyMetadata({ data: "json, name=messageModerationLevel" })
  messageModerationLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryLanguage" })
  primaryLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=sendMessageDenyNotification" })
  sendMessageDenyNotification?: string;

  @SpeakeasyMetadata({ data: "json, name=showInGroupDirectory" })
  showInGroupDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=spamModerationLevel" })
  spamModerationLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanAdd" })
  whoCanAdd?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanAddReferences" })
  whoCanAddReferences?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanApproveMembers" })
  whoCanApproveMembers?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanApproveMessages" })
  whoCanApproveMessages?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanAssignTopics" })
  whoCanAssignTopics?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanAssistContent" })
  whoCanAssistContent?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanBanUsers" })
  whoCanBanUsers?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanContactOwner" })
  whoCanContactOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanDeleteAnyPost" })
  whoCanDeleteAnyPost?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanDeleteTopics" })
  whoCanDeleteTopics?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanDiscoverGroup" })
  whoCanDiscoverGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanEnterFreeFormTags" })
  whoCanEnterFreeFormTags?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanHideAbuse" })
  whoCanHideAbuse?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanInvite" })
  whoCanInvite?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanJoin" })
  whoCanJoin?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanLeaveGroup" })
  whoCanLeaveGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanLockTopics" })
  whoCanLockTopics?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMakeTopicsSticky" })
  whoCanMakeTopicsSticky?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMarkDuplicate" })
  whoCanMarkDuplicate?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMarkFavoriteReplyOnAnyTopic" })
  whoCanMarkFavoriteReplyOnAnyTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMarkFavoriteReplyOnOwnTopic" })
  whoCanMarkFavoriteReplyOnOwnTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMarkNoResponseNeeded" })
  whoCanMarkNoResponseNeeded?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanModerateContent" })
  whoCanModerateContent?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanModerateMembers" })
  whoCanModerateMembers?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanModifyMembers" })
  whoCanModifyMembers?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanModifyTagsAndCategories" })
  whoCanModifyTagsAndCategories?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMoveTopicsIn" })
  whoCanMoveTopicsIn?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanMoveTopicsOut" })
  whoCanMoveTopicsOut?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanPostAnnouncements" })
  whoCanPostAnnouncements?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanPostMessage" })
  whoCanPostMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanTakeTopics" })
  whoCanTakeTopics?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanUnassignTopic" })
  whoCanUnassignTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanUnmarkFavoriteReplyOnAnyTopic" })
  whoCanUnmarkFavoriteReplyOnAnyTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanViewGroup" })
  whoCanViewGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=whoCanViewMembership" })
  whoCanViewMembership?: string;
}
