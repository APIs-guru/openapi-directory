# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ActivateRequest{
        Security: operations.ActivateSecurity{
            CustomAuthentication: shared.SchemeCustomAuthentication{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
    }
    
    res, err := s.Sdk.Activate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `Activate` - Temporarily activates quick connect for five minutes.
* `AddListingProvider` - Adds a listings provider.
* `AddMediaPath` - Add a media path to a library.
* `AddToCollection` - Adds items to a collection.
* `AddToPlaylist` - Adds items to a playlist.
* `AddTunerHost` - Adds a tuner host.
* `AddUserToSession` - Adds an additional user to a session.
* `AddVirtualFolder` - Adds a virtual folder.
* `ApplySearchCriteria` - Applies search criteria to an item and refreshes metadata.
* `AuthenticateUser` - Authenticates a user.
* `AuthenticateUserByName` - Authenticates a user by name.
* `AuthenticateWithQuickConnect` - Authenticates a user with quick connect.
* `Authorize` - Authorizes a pending quick connect request.
* `Available` - Enables or disables quick connect.
* `CancelPackageInstallation` - Cancels a package installation.
* `CancelSeriesTimer` - Cancels a live tv series timer.
* `CancelTimer` - Cancels a live tv timer.
* `CloseLiveStream` - Closes a media source.
* `CompleteWizard` - Completes the startup wizard.
* `Connect` - Attempts to retrieve authentication information.
* `CreateAdminNotification` - Sends a notification to all admins.
* `CreateCollection` - Creates a new collection.
* `CreateKey` - Create a new api key.
* `CreatePlaylist` - Creates a new playlist.
* `CreateProfile` - Creates a profile.
* `CreateSeriesTimer` - Creates a live tv series timer.
* `CreateTimer` - Creates a live tv timer.
* `CreateUserByName` - Creates a user.
* `Deauthorize` - Deauthorize all quick connect devices for the current user.
* `DeleteAlternateSources` - Removes alternate video sources.
* `DeleteDevice` - Deletes a device.
* `DeleteItem` - Deletes an item from the library and filesystem.
* `DeleteItemImage` - Delete an item's image.
* `DeleteItemImageByIndex` - Delete an item's image.
* `DeleteItems` - Deletes items from the library and filesystem.
* `DeleteListingProvider` - Delete listing provider.
* `DeleteProfile` - Deletes a profile.
* `DeleteRecording` - Deletes a live tv recording.
* `DeleteSubtitle` - Deletes an external subtitle file.
* `DeleteTunerHost` - Deletes a tuner host.
* `DeleteUser` - Deletes a user.
* `DeleteUserImage` - Delete the user's image.
* `DeleteUserImageByIndex` - Delete the user's image.
* `DeleteUserItemRating` - Deletes a user's saved personal rating for an item.
* `DisablePlugin` - Disable a plugin.
* `DiscoverTuners` - Discover tuners.
* `DiscvoverTuners` - Discover tuners.
* `DisplayContent` - Instructs a session to browse to an item or view.
* `DownloadRemoteImage` - Downloads a remote image for an item.
* `DownloadRemoteSubtitles` - Downloads a remote subtitle.
* `EnablePlugin` - Enables a disabled plugin.
* `ForgotPassword` - Initiates the forgot password process for a local user.
* `ForgotPasswordPin` - Redeems a forgot password pin.
* `Get` - Gets the search hint result.
* `GetAdditionalPart` - Gets additional parts for a video.
* `GetAlbumArtists` - Gets all album artists from a given item, folder, or the entire library.
* `GetAllChannelFeatures` - Get all channel features.
* `GetAncestors` - Gets all parents of an item.
* `GetArtistByName` - Gets an artist by name.
* `GetArtistImage` - Get artist image by name.
* `GetArtists` - Gets all artists from a given item, folder, or the entire library.
* `GetAttachment` - Get video attachment.
* `GetAudioStream` - Gets an audio stream.
* `GetAudioStreamByContainer` - Gets an audio stream.
* `GetAuthProviders` - Get all auth providers.
* `GetBitrateTestBytes` - Tests the network with a request with the size of the bitrate.
* `GetBookRemoteSearchResults` - Get book remote search.
* `GetBoxSetRemoteSearchResults` - Get box set remote search.
* `GetBrandingCSS` - Gets branding css.
* `GetBrandingCSS2` - Gets branding css.
* `GetBrandingOptions` - Gets branding configuration.
* `GetChannel` - Gets a live tv channel.
* `GetChannelFeatures` - Get channel features.
* `GetChannelItems` - Get channel items.
* `GetChannelMappingOptions` - Get channel mapping options.
* `GetChannels` - Gets available channels.
* `GetConfiguration` - Gets application configuration.
* `GetConfigurationPages` - Gets the configuration pages.
* `GetConnectionManager` - Gets Dlna media receiver registrar xml.
* `GetConnectionManager2` - Gets Dlna media receiver registrar xml.
* `GetConnectionManager3` - Gets Dlna media receiver registrar xml.
* `GetContentDirectory` - Gets Dlna content directory xml.
* `GetContentDirectory2` - Gets Dlna content directory xml.
* `GetContentDirectory3` - Gets Dlna content directory xml.
* `GetCountries` - Gets known countries.
* `GetCriticReviews` - Gets critic review for an item.
* `GetCultures` - Gets known cultures.
* `GetCurrentUser` - Gets the user based on auth token.
* `GetDashboardConfigurationPage` - Gets a dashboard configuration page.
* `GetDefaultDirectoryBrowser` - Get Default directory browser.
* `GetDefaultListingProvider` - Gets default listings provider info.
* `GetDefaultMetadataOptions` - Gets a default MetadataOptions object.
* `GetDefaultProfile` - Gets the default profile.
* `GetDefaultTimer` - Gets the default values for a new timer.
* `GetDescriptionXML` - Get Description Xml.
* `GetDescriptionXML2` - Get Description Xml.
* `GetDeviceInfo` - Get info for a device.
* `GetDeviceOptions` - Get options for a device.
* `GetDevices` - Get Devices.
* `GetDirectoryContents` - Gets the contents of a given directory in the file system.
* `GetDisplayPreferences` - Get Display Preferences.
* `GetDownload` - Downloads item media.
* `GetDrives` - Gets available drives from the server's file system.
* `GetEndpointInfo` - Gets information about the request endpoint.
* `GetEpisodes` - Gets episodes for a tv season.
* `GetExternalIDInfos` - Get the item's external id info.
* `GetFallbackFont` - Gets a fallback font file.
* `GetFallbackFontList` - Gets a list of available fallback font files.
* `GetFile` - Get the original file of an item.
* `GetFirstUser` - Gets the first user.
* `GetFirstUser2` - Gets the first user.
* `GetGeneralImage` - Get General Image.
* `GetGeneralImages` - Get all general images.
* `GetGenre` - Gets a genre, by name.
* `GetGenreImage` - Get genre image by name.
* `GetGenreImageByIndex` - Get genre image by name.
* `GetGenres` - Gets all genres from a given item, folder, or the entire library.
* `GetGroupingOptions` - Get user view grouping options.
* `GetGuideInfo` - Get guid info.
* `GetHlsAudioSegment` - Gets a video stream using HTTP live streaming.
* `GetHlsAudioSegmentLegacyAac` - Gets the specified audio segment for an audio item.
* `GetHlsAudioSegmentLegacyMp3` - Gets the specified audio segment for an audio item.
* `GetHlsPlaylistLegacy` - Gets a hls video playlist.
* `GetHlsVideoSegment` - Gets a video stream using HTTP live streaming.
* `GetHlsVideoSegmentLegacy` - Gets a hls video segment.
* `GetIcon` - Gets a server icon.
* `GetIconID` - Gets a server icon.
* `GetInstantMixFromAlbum` - Creates an instant playlist based on a given song.
* `GetInstantMixFromArtists` - Creates an instant playlist based on a given song.
* `GetInstantMixFromItem` - Creates an instant playlist based on a given song.
* `GetInstantMixFromMusicGenre` - Creates an instant playlist based on a given song.
* `GetInstantMixFromMusicGenres` - Creates an instant playlist based on a given song.
* `GetInstantMixFromPlaylist` - Creates an instant playlist based on a given song.
* `GetInstantMixFromSong` - Creates an instant playlist based on a given song.
* `GetIntros` - Gets intros to play before the main media item plays.
* `GetItem` - Gets an item from a user's library.
* `GetItemCounts` - Get item counts.
* `GetItemImage` - Gets the item's image.
* `GetItemImage2` - Gets the item's image.
* `GetItemImageByIndex` - Gets the item's image.
* `GetItemImageInfos` - Get item image infos.
* `GetItems` - Gets items based on a query.
* `GetItemsByUserID` - Gets items based on a query.
* `GetKeys` - Get all keys.
* `GetLatestChannelItems` - Gets latest channel items.
* `GetLatestMedia` - Gets latest media.
* `GetLibraryOptionsInfo` - Gets the library options info.
* `GetLineups` - Gets available lineups.
* `GetLiveHlsStream` - Gets a hls live stream.
* `GetLiveRecordingFile` - Gets a live tv recording stream.
* `GetLiveStreamFile` - Gets a live tv channel stream.
* `GetLiveTvChannels` - Gets available live tv channels.
* `GetLiveTvInfo` - Gets available live tv services.
* `GetLiveTvPrograms` - Gets available live tv epgs.
* `GetLocalTrailers` - Gets local trailers for an item.
* `GetLocalizationOptions` - Gets localization options.
* `GetLogEntries` - Gets activity log entries.
* `GetLogFile` - Gets a log file.
* `GetMasterHlsAudioPlaylist` - Gets an audio hls playlist stream.
* `GetMasterHlsVideoPlaylist` - Gets a video hls playlist stream.
* `GetMediaFolders` - Gets all user media folders.
* `GetMediaInfoImage` - Get media info image.
* `GetMediaInfoImages` - Get all media info images.
* `GetMediaReceiverRegistrar` - Gets Dlna media receiver registrar xml.
* `GetMediaReceiverRegistrar2` - Gets Dlna media receiver registrar xml.
* `GetMediaReceiverRegistrar3` - Gets Dlna media receiver registrar xml.
* `GetMetadataEditorInfo` - Gets metadata editor info for an item.
* `GetMovieRecommendations` - Gets movie recommendations.
* `GetMovieRemoteSearchResults` - Get movie remote search.
* `GetMusicAlbumRemoteSearchResults` - Get music album remote search.
* `GetMusicArtistRemoteSearchResults` - Get music artist remote search.
* `GetMusicGenre` - Gets a music genre, by name.
* `GetMusicGenreImage` - Get music genre image by name.
* `GetMusicGenreImageByIndex` - Get music genre image by name.
* `GetMusicGenres` - Gets all music genres from a given item, folder, or the entire library.
* `GetMusicVideoRemoteSearchResults` - Get music video remote search.
* `GetNamedConfiguration` - Gets a named configuration.
* `GetNetworkShares` - Gets network paths.
* `GetNextUp` - Gets a list of next up episodes.
* `GetNotificationServices` - Gets notification services.
* `GetNotificationTypes` - Gets notification types.
* `GetNotifications` - Gets a user's notifications.
* `GetNotificationsSummary` - Gets a user's notification summary.
* `GetPackageInfo` - Gets a package by name or assembly GUID.
* `GetPackages` - Gets available packages.
* `GetParentPath` - Gets the parent path of a given path.
* `GetParentalRatings` - Gets known parental ratings.
* `GetPasswordResetProviders` - Get all password reset providers.
* `GetPerson` - Get person by name.
* `GetPersonImage` - Get person image by name.
* `GetPersonImageByIndex` - Get person image by name.
* `GetPersonRemoteSearchResults` - Get person remote search.
* `GetPersons` - Gets all persons.
* `GetPhysicalPaths` - Gets a list of physical paths from virtual folders.
* `GetPingSystem` - Pings the system.
* `GetPlaybackInfo` - Gets live playback media info for an item.
* `GetPlaylistItems` - Gets the original items of a playlist.
* `GetPluginConfiguration` - Gets plugin configuration.
* `GetPluginImage` - Gets a plugin's image.
* `GetPluginManifest` - Gets a plugin's manifest.
* `GetPlugins` - Gets a list of currently installed plugins.
* `GetPostedPlaybackInfo` - Gets live playback media info for an item.
* `GetProfile` - Gets a single profile.
* `GetProfileInfos` - Get profile infos.
* `GetProgram` - Gets a live tv program.
* `GetPrograms` - Gets available live tv epgs.
* `GetPublicSystemInfo` - Gets public information about the server.
* `GetPublicUsers` - Gets a list of publicly visible users for display on a login screen.
* `GetQueryFilters` - Gets query filters.
* `GetQueryFiltersLegacy` - Gets legacy query filters.
* `GetRatingImage` - Get rating image.
* `GetRatingImages` - Get all general images.
* `GetRecommendedPrograms` - Gets recommended live tv epgs.
* `GetRecording` - Gets a live tv recording.
* `GetRecordingFolders` - Gets recording folders.
* `GetRecordingGroup` - Get recording group.
* `GetRecordingGroups` - Gets live tv recording groups.
* `GetRecordings` - Gets live tv recordings.
* `GetRecordingsSeries` - Gets live tv recording series.
* `GetRemoteImage` - Gets a remote image.
* `GetRemoteImageProviders` - Gets available remote image providers for an item.
* `GetRemoteImages` - Gets available remote images for an item.
* `GetRemoteSearchImage` - Gets a remote image.
* `GetRemoteSubtitles` - Gets the remote subtitles.
* `GetRepositories` - Gets all package repositories.
* `GetResumeItems` - Gets items based on a query.
* `GetRootFolder` - Gets the root folder from a user's library.
* `GetSchedulesDirectCountries` - Gets available countries.
* `GetSeasons` - Gets seasons for a tv series.
* `GetSeriesRemoteSearchResults` - Get series remote search.
* `GetSeriesTimer` - Gets a live tv series timer.
* `GetSeriesTimers` - Gets live tv series timers.
* `GetServerLogs` - Gets a list of available server log files.
* `GetSessions` - Gets a list of sessions.
* `GetSimilarAlbums` - Gets similar items.
* `GetSimilarArtists` - Gets similar items.
* `GetSimilarItems` - Gets similar items.
* `GetSimilarMovies` - Gets similar items.
* `GetSimilarShows` - Gets similar items.
* `GetSimilarTrailers` - Gets similar items.
* `GetSpecialFeatures` - Gets special features for an item.
* `GetStartupConfiguration` - Gets the initial startup wizard configuration.
* `GetStatus` - Gets the current quick connect state.
* `GetStudio` - Gets a studio by name.
* `GetStudioImage` - Get studio image by name.
* `GetStudioImageByIndex` - Get studio image by name.
* `GetStudios` - Gets all studios from a given item, folder, or the entire library.
* `GetSubtitle` - Gets subtitles in a specified format.
* `GetSubtitlePlaylist` - Gets an HLS subtitle playlist.
* `GetSubtitleWithTicks` - Gets subtitles in a specified format.
* `GetSuggestions` - Gets suggestions.
* `GetSystemInfo` - Gets information about the server.
* `GetTask` - Get task by id.
* `GetTasks` - Get tasks.
* `GetThemeMedia` - Get theme songs and videos for an item.
* `GetThemeSongs` - Get theme songs for an item.
* `GetThemeVideos` - Get theme videos for an item.
* `GetTimer` - Gets a timer.
* `GetTimers` - Gets the live tv timers.
* `GetTrailerRemoteSearchResults` - Get trailer remote search.
* `GetTrailers` - Finds movies and trailers similar to a given trailer.
* `GetTunerHostTypes` - Get tuner host types.
* `GetUniversalAudioStream` - Gets an audio stream.
* `GetUpcomingEpisodes` - Gets a list of upcoming episodes.
* `GetUserByID` - Gets a user by Id.
* `GetUserImage` - Get user profile image.
* `GetUserImageByIndex` - Get user profile image.
* `GetUserViews` - Get user views.
* `GetUsers` - Gets a list of users.
* `GetUtcTime` - Gets the current UTC time.
* `GetVariantHlsAudioPlaylist` - Gets an audio stream using HTTP live streaming.
* `GetVariantHlsVideoPlaylist` - Gets a video stream using HTTP live streaming.
* `GetVideoStream` - Gets a video stream.
* `GetVideoStreamByContainer` - Gets a video stream.
* `GetVirtualFolders` - Gets all virtual folders.
* `GetWakeOnLanInfo` - Gets wake on lan information.
* `GetYear` - Gets a year.
* `GetYears` - Get years.
* `HeadArtistImage` - Get artist image by name.
* `HeadAudioStream` - Gets an audio stream.
* `HeadAudioStreamByContainer` - Gets an audio stream.
* `HeadGenreImage` - Get genre image by name.
* `HeadGenreImageByIndex` - Get genre image by name.
* `HeadItemImage` - Gets the item's image.
* `HeadItemImage2` - Gets the item's image.
* `HeadItemImageByIndex` - Gets the item's image.
* `HeadMasterHlsAudioPlaylist` - Gets an audio hls playlist stream.
* `HeadMasterHlsVideoPlaylist` - Gets a video hls playlist stream.
* `HeadMusicGenreImage` - Get music genre image by name.
* `HeadMusicGenreImageByIndex` - Get music genre image by name.
* `HeadPersonImage` - Get person image by name.
* `HeadPersonImageByIndex` - Get person image by name.
* `HeadStudioImage` - Get studio image by name.
* `HeadStudioImageByIndex` - Get studio image by name.
* `HeadUniversalAudioStream` - Gets an audio stream.
* `HeadUserImage` - Get user profile image.
* `HeadUserImageByIndex` - Get user profile image.
* `HeadVideoStream` - Gets a video stream.
* `HeadVideoStreamByContainer` - Gets a video stream.
* `Initiate` - Initiate a new quick connect request.
* `InstallPackage` - Installs a package.
* `MarkFavoriteItem` - Marks an item as a favorite.
* `MarkPlayedItem` - Marks an item as played for user.
* `MarkUnplayedItem` - Marks an item as unplayed for user.
* `MergeVersions` - Merges videos into a single record.
* `MoveItem` - Moves a playlist item.
* `OnPlaybackProgress` - Reports a user's playback progress.
* `OnPlaybackStart` - Reports that a user has begun playing an item.
* `OnPlaybackStopped` - Reports that a user has stopped playing an item.
* `OpenLiveStream` - Opens a media source.
* `PingPlaybackSession` - Pings a playback session.
* `Play` - Instructs a session to play an item.
* `Post` - Refreshes metadata for an item.
* `PostAddedMovies` - Reports that new movies have been added by an external source.
* `PostAddedSeries` - Reports that new episodes of a series have been added by an external source.
* `PostCapabilities` - Updates capabilities for a device.
* `PostFullCapabilities` - Updates capabilities for a device.
* `PostPingSystem` - Pings the system.
* `PostUpdatedMedia` - Reports that new movies have been added by an external source.
* `PostUpdatedMovies` - Reports that new movies have been added by an external source.
* `PostUpdatedSeries` - Reports that new episodes of a series have been added by an external source.
* `PostUserImage` - Sets the user image.
* `PostUserImageByIndex` - Sets the user image.
* `ProcessConnectionManagerControlRequest` - Process a connection manager control request.
* `ProcessContentDirectoryControlRequest` - Process a content directory control request.
* `ProcessMediaReceiverRegistrarControlRequest` - Process a media receiver registrar control request.
* `RefreshLibrary` - Starts a library scan.
* `RemoveFromCollection` - Removes items from a collection.
* `RemoveFromPlaylist` - Removes items from a playlist.
* `RemoveMediaPath` - Remove a media path.
* `RemoveUserFromSession` - Removes an additional user from a session.
* `RemoveVirtualFolder` - Removes a virtual folder.
* `RenameVirtualFolder` - Renames a virtual folder.
* `ReportPlaybackProgress` - Reports playback progress within a session.
* `ReportPlaybackStart` - Reports playback has started within a session.
* `ReportPlaybackStopped` - Reports playback has stopped within a session.
* `ReportSessionEnded` - Reports that a session has ended.
* `ReportViewing` - Reports that a session is viewing an item.
* `ResetTuner` - Resets a tv tuner.
* `RestartApplication` - Restarts the application.
* `RevokeKey` - Remove an api key.
* `SearchRemoteSubtitles` - Search remote subtitles.
* `SendFullGeneralCommand` - Issues a full general command to a client.
* `SendGeneralCommand` - Issues a general command to a client.
* `SendMessageCommand` - Issues a command to a client to display a message to the user.
* `SendPlaystateCommand` - Issues a playstate command to a client.
* `SendSystemCommand` - Issues a system command to a client.
* `SetChannelMapping` - Set channel mappings.
* `SetItemImage` - Set item image.
* `SetItemImageByIndex` - Set item image.
* `SetRead` - Sets notifications as read.
* `SetRemoteAccess` - Sets remote access and UPnP.
* `SetRepositories` - Sets the enabled and existing package repositories.
* `SetUnread` - Sets notifications as unread.
* `ShutdownApplication` - Shuts down the application.
* `StartTask` - Start specified task.
* `StopEncodingProcess` - Stops an active encoding.
* `StopTask` - Stop specified task.
* `SyncPlayBuffering` - Notify SyncPlay group that member is buffering.
* `SyncPlayCreateGroup` - Create a new SyncPlay group.
* `SyncPlayGetGroups` - Gets all SyncPlay groups.
* `SyncPlayJoinGroup` - Join an existing SyncPlay group.
* `SyncPlayLeaveGroup` - Leave the joined SyncPlay group.
* `SyncPlayMovePlaylistItem` - Request to move an item in the playlist in SyncPlay group.
* `SyncPlayNextItem` - Request next item in SyncPlay group.
* `SyncPlayPause` - Request pause in SyncPlay group.
* `SyncPlayPing` - Update session ping.
* `SyncPlayPreviousItem` - Request previous item in SyncPlay group.
* `SyncPlayQueue` - Request to queue items to the playlist of a SyncPlay group.
* `SyncPlayReady` - Notify SyncPlay group that member is ready for playback.
* `SyncPlayRemoveFromPlaylist` - Request to remove items from the playlist in SyncPlay group.
* `SyncPlaySeek` - Request seek in SyncPlay group.
* `SyncPlaySetIgnoreWait` - Request SyncPlay group to ignore member during group-wait.
* `SyncPlaySetNewQueue` - Request to set new playlist in SyncPlay group.
* `SyncPlaySetPlaylistItem` - Request to change playlist item in SyncPlay group.
* `SyncPlaySetRepeatMode` - Request to set repeat mode in SyncPlay group.
* `SyncPlaySetShuffleMode` - Request to set shuffle mode in SyncPlay group.
* `SyncPlayStop` - Request stop in SyncPlay group.
* `SyncPlayUnpause` - Request unpause in SyncPlay group.
* `UninstallPlugin` - Uninstalls a plugin.
* `UninstallPluginByVersion` - Uninstalls a plugin by version.
* `UnmarkFavoriteItem` - Unmarks item as a favorite.
* `UpdateConfiguration` - Updates application configuration.
* `UpdateDeviceOptions` - Update device options.
* `UpdateDisplayPreferences` - Update Display Preferences.
* `UpdateInitialConfiguration` - Sets the initial startup wizard configuration.
* `UpdateItem` - Updates an item.
* `UpdateItemContentType` - Updates an item's content type.
* `UpdateItemImageIndex` - Updates the index for an item image.
* `UpdateLibraryOptions` - Update library options.
* `UpdateMediaEncoderPath` - Updates the path to the media encoder.
* `UpdateMediaPath` - Updates a media path.
* `UpdateNamedConfiguration` - Updates named configuration.
* `UpdatePluginConfiguration` - Updates plugin configuration.
* `UpdatePluginSecurityInfo` - Updates plugin security info.
* `UpdateProfile` - Updates a profile.
* `UpdateSeriesTimer` - Updates a live tv series timer.
* `UpdateStartupUser` - Sets the user name and password.
* `UpdateTask` - Update specified task triggers.
* `UpdateTimer` - Updates a live tv timer.
* `UpdateUser` - Updates a user.
* `UpdateUserConfiguration` - Updates a user configuration.
* `UpdateUserEasyPassword` - Updates a user's easy password.
* `UpdateUserItemRating` - Updates a user's rating for an item.
* `UpdateUserPassword` - Updates a user's password.
* `UpdateUserPolicy` - Updates a user policy.
* `UploadSubtitle` - Upload an external subtitle file.
* `ValidatePath` - Validates path.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
