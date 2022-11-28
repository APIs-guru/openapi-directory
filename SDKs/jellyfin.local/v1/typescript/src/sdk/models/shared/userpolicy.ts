import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessSchedule } from "./accessschedule";
import { UnratedItemEnum } from "./unrateditemenum";
import { SyncPlayUserAccessTypeEnum } from "./syncplayuseraccesstypeenum";
import { AccessScheduleInput } from "./accessschedule";



export class UserPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessSchedules", elemType: AccessSchedule })
  accessSchedules?: AccessSchedule[];

  @SpeakeasyMetadata({ data: "json, name=AuthenticationProviderId" })
  authenticationProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=BlockUnratedItems" })
  blockUnratedItems?: UnratedItemEnum[];

  @SpeakeasyMetadata({ data: "json, name=BlockedChannels" })
  blockedChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=BlockedMediaFolders" })
  blockedMediaFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=BlockedTags" })
  blockedTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableAllChannels" })
  enableAllChannels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAllDevices" })
  enableAllDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAllFolders" })
  enableAllFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAudioPlaybackTranscoding" })
  enableAudioPlaybackTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableContentDeletion" })
  enableContentDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableContentDeletionFromFolders" })
  enableContentDeletionFromFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableContentDownloading" })
  enableContentDownloading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableLiveTvAccess" })
  enableLiveTvAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableLiveTvManagement" })
  enableLiveTvManagement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaConversion" })
  enableMediaConversion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaPlayback" })
  enableMediaPlayback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePlaybackRemuxing" })
  enablePlaybackRemuxing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePublicSharing" })
  enablePublicSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteControlOfOtherUsers" })
  enableRemoteControlOfOtherUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSharedDeviceControl" })
  enableSharedDeviceControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSyncTranscoding" })
  enableSyncTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableUserPreferenceAccess" })
  enableUserPreferenceAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableVideoPlaybackTranscoding" })
  enableVideoPlaybackTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnabledChannels" })
  enabledChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnabledDevices" })
  enabledDevices?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnabledFolders" })
  enabledFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=ForceRemoteSourceTranscoding" })
  forceRemoteSourceTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InvalidLoginAttemptCount" })
  invalidLoginAttemptCount?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAdministrator" })
  isAdministrator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsHidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LoginAttemptsBeforeLockout" })
  loginAttemptsBeforeLockout?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxActiveSessions" })
  maxActiveSessions?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxParentalRating" })
  maxParentalRating?: number;

  @SpeakeasyMetadata({ data: "json, name=PasswordResetProviderId" })
  passwordResetProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SyncPlayAccess" })
  syncPlayAccess?: SyncPlayUserAccessTypeEnum;
}


export class UserPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessSchedules", elemType: AccessScheduleInput })
  accessSchedules?: AccessScheduleInput[];

  @SpeakeasyMetadata({ data: "json, name=AuthenticationProviderId" })
  authenticationProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=BlockUnratedItems" })
  blockUnratedItems?: UnratedItemEnum[];

  @SpeakeasyMetadata({ data: "json, name=BlockedChannels" })
  blockedChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=BlockedMediaFolders" })
  blockedMediaFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=BlockedTags" })
  blockedTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableAllChannels" })
  enableAllChannels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAllDevices" })
  enableAllDevices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAllFolders" })
  enableAllFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableAudioPlaybackTranscoding" })
  enableAudioPlaybackTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableContentDeletion" })
  enableContentDeletion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableContentDeletionFromFolders" })
  enableContentDeletionFromFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableContentDownloading" })
  enableContentDownloading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableLiveTvAccess" })
  enableLiveTvAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableLiveTvManagement" })
  enableLiveTvManagement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaConversion" })
  enableMediaConversion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMediaPlayback" })
  enableMediaPlayback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePlaybackRemuxing" })
  enablePlaybackRemuxing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnablePublicSharing" })
  enablePublicSharing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteControlOfOtherUsers" })
  enableRemoteControlOfOtherUsers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSharedDeviceControl" })
  enableSharedDeviceControl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSyncTranscoding" })
  enableSyncTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableUserPreferenceAccess" })
  enableUserPreferenceAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableVideoPlaybackTranscoding" })
  enableVideoPlaybackTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnabledChannels" })
  enabledChannels?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnabledDevices" })
  enabledDevices?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnabledFolders" })
  enabledFolders?: string[];

  @SpeakeasyMetadata({ data: "json, name=ForceRemoteSourceTranscoding" })
  forceRemoteSourceTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InvalidLoginAttemptCount" })
  invalidLoginAttemptCount?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAdministrator" })
  isAdministrator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsDisabled" })
  isDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsHidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LoginAttemptsBeforeLockout" })
  loginAttemptsBeforeLockout?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxActiveSessions" })
  maxActiveSessions?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxParentalRating" })
  maxParentalRating?: number;

  @SpeakeasyMetadata({ data: "json, name=PasswordResetProviderId" })
  passwordResetProviderId?: string;

  @SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=SyncPlayAccess" })
  syncPlayAccess?: SyncPlayUserAccessTypeEnum;
}
