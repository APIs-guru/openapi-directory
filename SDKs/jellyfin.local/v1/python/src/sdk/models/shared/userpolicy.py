from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import accessschedule
from . import unrateditem_enum
from . import syncplayuseraccesstype_enum


@dataclass_json
@dataclass
class UserPolicy:
    access_schedules: Optional[List[accessschedule.AccessSchedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessSchedules' }})
    authentication_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthenticationProviderId' }})
    block_unrated_items: Optional[List[unrateditem_enum.UnratedItemEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockUnratedItems' }})
    blocked_channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockedChannels' }})
    blocked_media_folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockedMediaFolders' }})
    blocked_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockedTags' }})
    enable_all_channels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAllChannels' }})
    enable_all_devices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAllDevices' }})
    enable_all_folders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAllFolders' }})
    enable_audio_playback_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableAudioPlaybackTranscoding' }})
    enable_content_deletion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableContentDeletion' }})
    enable_content_deletion_from_folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableContentDeletionFromFolders' }})
    enable_content_downloading: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableContentDownloading' }})
    enable_live_tv_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableLiveTvAccess' }})
    enable_live_tv_management: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableLiveTvManagement' }})
    enable_media_conversion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableMediaConversion' }})
    enable_media_playback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableMediaPlayback' }})
    enable_playback_remuxing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePlaybackRemuxing' }})
    enable_public_sharing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePublicSharing' }})
    enable_remote_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableRemoteAccess' }})
    enable_remote_control_of_other_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableRemoteControlOfOtherUsers' }})
    enable_shared_device_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSharedDeviceControl' }})
    enable_sync_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSyncTranscoding' }})
    enable_user_preference_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableUserPreferenceAccess' }})
    enable_video_playback_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableVideoPlaybackTranscoding' }})
    enabled_channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledChannels' }})
    enabled_devices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledDevices' }})
    enabled_folders: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnabledFolders' }})
    force_remote_source_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForceRemoteSourceTranscoding' }})
    invalid_login_attempt_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidLoginAttemptCount' }})
    is_administrator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAdministrator' }})
    is_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDisabled' }})
    is_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsHidden' }})
    login_attempts_before_lockout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LoginAttemptsBeforeLockout' }})
    max_active_sessions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxActiveSessions' }})
    max_parental_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxParentalRating' }})
    password_reset_provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PasswordResetProviderId' }})
    remote_client_bitrate_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteClientBitrateLimit' }})
    sync_play_access: Optional[syncplayuseraccesstype_enum.SyncPlayUserAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SyncPlayAccess' }})
    
