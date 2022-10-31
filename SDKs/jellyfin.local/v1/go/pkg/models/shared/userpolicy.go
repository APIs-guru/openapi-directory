package shared



type UserPolicy struct {
    AccessSchedules []AccessSchedule `json:"AccessSchedules,omitempty"`
    AuthenticationProviderID *string `json:"AuthenticationProviderId,omitempty"`
    BlockUnratedItems []UnratedItemEnum `json:"BlockUnratedItems,omitempty"`
    BlockedChannels []string `json:"BlockedChannels,omitempty"`
    BlockedMediaFolders []string `json:"BlockedMediaFolders,omitempty"`
    BlockedTags []string `json:"BlockedTags,omitempty"`
    EnableAllChannels *bool `json:"EnableAllChannels,omitempty"`
    EnableAllDevices *bool `json:"EnableAllDevices,omitempty"`
    EnableAllFolders *bool `json:"EnableAllFolders,omitempty"`
    EnableAudioPlaybackTranscoding *bool `json:"EnableAudioPlaybackTranscoding,omitempty"`
    EnableContentDeletion *bool `json:"EnableContentDeletion,omitempty"`
    EnableContentDeletionFromFolders []string `json:"EnableContentDeletionFromFolders,omitempty"`
    EnableContentDownloading *bool `json:"EnableContentDownloading,omitempty"`
    EnableLiveTvAccess *bool `json:"EnableLiveTvAccess,omitempty"`
    EnableLiveTvManagement *bool `json:"EnableLiveTvManagement,omitempty"`
    EnableMediaConversion *bool `json:"EnableMediaConversion,omitempty"`
    EnableMediaPlayback *bool `json:"EnableMediaPlayback,omitempty"`
    EnablePlaybackRemuxing *bool `json:"EnablePlaybackRemuxing,omitempty"`
    EnablePublicSharing *bool `json:"EnablePublicSharing,omitempty"`
    EnableRemoteAccess *bool `json:"EnableRemoteAccess,omitempty"`
    EnableRemoteControlOfOtherUsers *bool `json:"EnableRemoteControlOfOtherUsers,omitempty"`
    EnableSharedDeviceControl *bool `json:"EnableSharedDeviceControl,omitempty"`
    EnableSyncTranscoding *bool `json:"EnableSyncTranscoding,omitempty"`
    EnableUserPreferenceAccess *bool `json:"EnableUserPreferenceAccess,omitempty"`
    EnableVideoPlaybackTranscoding *bool `json:"EnableVideoPlaybackTranscoding,omitempty"`
    EnabledChannels []string `json:"EnabledChannels,omitempty"`
    EnabledDevices []string `json:"EnabledDevices,omitempty"`
    EnabledFolders []string `json:"EnabledFolders,omitempty"`
    ForceRemoteSourceTranscoding *bool `json:"ForceRemoteSourceTranscoding,omitempty"`
    InvalidLoginAttemptCount *int32 `json:"InvalidLoginAttemptCount,omitempty"`
    IsAdministrator *bool `json:"IsAdministrator,omitempty"`
    IsDisabled *bool `json:"IsDisabled,omitempty"`
    IsHidden *bool `json:"IsHidden,omitempty"`
    LoginAttemptsBeforeLockout *int32 `json:"LoginAttemptsBeforeLockout,omitempty"`
    MaxActiveSessions *int32 `json:"MaxActiveSessions,omitempty"`
    MaxParentalRating *int32 `json:"MaxParentalRating,omitempty"`
    PasswordResetProviderID *string `json:"PasswordResetProviderId,omitempty"`
    RemoteClientBitrateLimit *int32 `json:"RemoteClientBitrateLimit,omitempty"`
    SyncPlayAccess *SyncPlayUserAccessTypeEnum `json:"SyncPlayAccess,omitempty"`
    
}

