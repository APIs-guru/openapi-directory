package shared

type UserPolicy struct {
	AccessSchedules                  []AccessSchedule            `json:"AccessSchedules"`
	AuthenticationProviderID         *string                     `json:"AuthenticationProviderId"`
	BlockUnratedItems                []UnratedItemEnum           `json:"BlockUnratedItems"`
	BlockedChannels                  []string                    `json:"BlockedChannels"`
	BlockedMediaFolders              []string                    `json:"BlockedMediaFolders"`
	BlockedTags                      []string                    `json:"BlockedTags"`
	EnableAllChannels                *bool                       `json:"EnableAllChannels"`
	EnableAllDevices                 *bool                       `json:"EnableAllDevices"`
	EnableAllFolders                 *bool                       `json:"EnableAllFolders"`
	EnableAudioPlaybackTranscoding   *bool                       `json:"EnableAudioPlaybackTranscoding"`
	EnableContentDeletion            *bool                       `json:"EnableContentDeletion"`
	EnableContentDeletionFromFolders []string                    `json:"EnableContentDeletionFromFolders"`
	EnableContentDownloading         *bool                       `json:"EnableContentDownloading"`
	EnableLiveTvAccess               *bool                       `json:"EnableLiveTvAccess"`
	EnableLiveTvManagement           *bool                       `json:"EnableLiveTvManagement"`
	EnableMediaConversion            *bool                       `json:"EnableMediaConversion"`
	EnableMediaPlayback              *bool                       `json:"EnableMediaPlayback"`
	EnablePlaybackRemuxing           *bool                       `json:"EnablePlaybackRemuxing"`
	EnablePublicSharing              *bool                       `json:"EnablePublicSharing"`
	EnableRemoteAccess               *bool                       `json:"EnableRemoteAccess"`
	EnableRemoteControlOfOtherUsers  *bool                       `json:"EnableRemoteControlOfOtherUsers"`
	EnableSharedDeviceControl        *bool                       `json:"EnableSharedDeviceControl"`
	EnableSyncTranscoding            *bool                       `json:"EnableSyncTranscoding"`
	EnableUserPreferenceAccess       *bool                       `json:"EnableUserPreferenceAccess"`
	EnableVideoPlaybackTranscoding   *bool                       `json:"EnableVideoPlaybackTranscoding"`
	EnabledChannels                  []string                    `json:"EnabledChannels"`
	EnabledDevices                   []string                    `json:"EnabledDevices"`
	EnabledFolders                   []string                    `json:"EnabledFolders"`
	ForceRemoteSourceTranscoding     *bool                       `json:"ForceRemoteSourceTranscoding"`
	InvalidLoginAttemptCount         *int32                      `json:"InvalidLoginAttemptCount"`
	IsAdministrator                  *bool                       `json:"IsAdministrator"`
	IsDisabled                       *bool                       `json:"IsDisabled"`
	IsHidden                         *bool                       `json:"IsHidden"`
	LoginAttemptsBeforeLockout       *int32                      `json:"LoginAttemptsBeforeLockout"`
	MaxActiveSessions                *int32                      `json:"MaxActiveSessions"`
	MaxParentalRating                *int32                      `json:"MaxParentalRating"`
	PasswordResetProviderID          *string                     `json:"PasswordResetProviderId"`
	RemoteClientBitrateLimit         *int32                      `json:"RemoteClientBitrateLimit"`
	SyncPlayAccess                   *SyncPlayUserAccessTypeEnum `json:"SyncPlayAccess"`
}
