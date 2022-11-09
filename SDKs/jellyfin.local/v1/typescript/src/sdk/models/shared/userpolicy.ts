import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessSchedule } from "./accessschedule";
import { UnratedItemEnum } from "./unrateditemenum";
import { SyncPlayUserAccessTypeEnum } from "./syncplayuseraccesstypeenum";


export class UserPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessSchedules", elemType: shared.AccessSchedule })
  accessSchedules?: AccessSchedule[];

  @Metadata({ data: "json, name=AuthenticationProviderId" })
  authenticationProviderId?: string;

  @Metadata({ data: "json, name=BlockUnratedItems" })
  blockUnratedItems?: UnratedItemEnum[];

  @Metadata({ data: "json, name=BlockedChannels" })
  blockedChannels?: string[];

  @Metadata({ data: "json, name=BlockedMediaFolders" })
  blockedMediaFolders?: string[];

  @Metadata({ data: "json, name=BlockedTags" })
  blockedTags?: string[];

  @Metadata({ data: "json, name=EnableAllChannels" })
  enableAllChannels?: boolean;

  @Metadata({ data: "json, name=EnableAllDevices" })
  enableAllDevices?: boolean;

  @Metadata({ data: "json, name=EnableAllFolders" })
  enableAllFolders?: boolean;

  @Metadata({ data: "json, name=EnableAudioPlaybackTranscoding" })
  enableAudioPlaybackTranscoding?: boolean;

  @Metadata({ data: "json, name=EnableContentDeletion" })
  enableContentDeletion?: boolean;

  @Metadata({ data: "json, name=EnableContentDeletionFromFolders" })
  enableContentDeletionFromFolders?: string[];

  @Metadata({ data: "json, name=EnableContentDownloading" })
  enableContentDownloading?: boolean;

  @Metadata({ data: "json, name=EnableLiveTvAccess" })
  enableLiveTvAccess?: boolean;

  @Metadata({ data: "json, name=EnableLiveTvManagement" })
  enableLiveTvManagement?: boolean;

  @Metadata({ data: "json, name=EnableMediaConversion" })
  enableMediaConversion?: boolean;

  @Metadata({ data: "json, name=EnableMediaPlayback" })
  enableMediaPlayback?: boolean;

  @Metadata({ data: "json, name=EnablePlaybackRemuxing" })
  enablePlaybackRemuxing?: boolean;

  @Metadata({ data: "json, name=EnablePublicSharing" })
  enablePublicSharing?: boolean;

  @Metadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @Metadata({ data: "json, name=EnableRemoteControlOfOtherUsers" })
  enableRemoteControlOfOtherUsers?: boolean;

  @Metadata({ data: "json, name=EnableSharedDeviceControl" })
  enableSharedDeviceControl?: boolean;

  @Metadata({ data: "json, name=EnableSyncTranscoding" })
  enableSyncTranscoding?: boolean;

  @Metadata({ data: "json, name=EnableUserPreferenceAccess" })
  enableUserPreferenceAccess?: boolean;

  @Metadata({ data: "json, name=EnableVideoPlaybackTranscoding" })
  enableVideoPlaybackTranscoding?: boolean;

  @Metadata({ data: "json, name=EnabledChannels" })
  enabledChannels?: string[];

  @Metadata({ data: "json, name=EnabledDevices" })
  enabledDevices?: string[];

  @Metadata({ data: "json, name=EnabledFolders" })
  enabledFolders?: string[];

  @Metadata({ data: "json, name=ForceRemoteSourceTranscoding" })
  forceRemoteSourceTranscoding?: boolean;

  @Metadata({ data: "json, name=InvalidLoginAttemptCount" })
  invalidLoginAttemptCount?: number;

  @Metadata({ data: "json, name=IsAdministrator" })
  isAdministrator?: boolean;

  @Metadata({ data: "json, name=IsDisabled" })
  isDisabled?: boolean;

  @Metadata({ data: "json, name=IsHidden" })
  isHidden?: boolean;

  @Metadata({ data: "json, name=LoginAttemptsBeforeLockout" })
  loginAttemptsBeforeLockout?: number;

  @Metadata({ data: "json, name=MaxActiveSessions" })
  maxActiveSessions?: number;

  @Metadata({ data: "json, name=MaxParentalRating" })
  maxParentalRating?: number;

  @Metadata({ data: "json, name=PasswordResetProviderId" })
  passwordResetProviderId?: string;

  @Metadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @Metadata({ data: "json, name=SyncPlayAccess" })
  syncPlayAccess?: SyncPlayUserAccessTypeEnum;
}
