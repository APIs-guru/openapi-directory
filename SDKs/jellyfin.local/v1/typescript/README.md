# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ActivateRequest, ActivateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivateRequest = {
  security: {
    customAuthentication: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
};

sdk.sdk.activate(req).then((res: ActivateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activate` - Temporarily activates quick connect for five minutes.
* `addListingProvider` - Adds a listings provider.
* `addMediaPath` - Add a media path to a library.
* `addToCollection` - Adds items to a collection.
* `addToPlaylist` - Adds items to a playlist.
* `addTunerHost` - Adds a tuner host.
* `addUserToSession` - Adds an additional user to a session.
* `addVirtualFolder` - Adds a virtual folder.
* `applySearchCriteria` - Applies search criteria to an item and refreshes metadata.
* `authenticateUser` - Authenticates a user.
* `authenticateUserByName` - Authenticates a user by name.
* `authenticateWithQuickConnect` - Authenticates a user with quick connect.
* `authorize` - Authorizes a pending quick connect request.
* `available` - Enables or disables quick connect.
* `cancelPackageInstallation` - Cancels a package installation.
* `cancelSeriesTimer` - Cancels a live tv series timer.
* `cancelTimer` - Cancels a live tv timer.
* `closeLiveStream` - Closes a media source.
* `completeWizard` - Completes the startup wizard.
* `connect` - Attempts to retrieve authentication information.
* `createAdminNotification` - Sends a notification to all admins.
* `createCollection` - Creates a new collection.
* `createKey` - Create a new api key.
* `createPlaylist` - Creates a new playlist.
* `createProfile` - Creates a profile.
* `createSeriesTimer` - Creates a live tv series timer.
* `createTimer` - Creates a live tv timer.
* `createUserByName` - Creates a user.
* `deauthorize` - Deauthorize all quick connect devices for the current user.
* `deleteAlternateSources` - Removes alternate video sources.
* `deleteDevice` - Deletes a device.
* `deleteItem` - Deletes an item from the library and filesystem.
* `deleteItemImage` - Delete an item's image.
* `deleteItemImageByIndex` - Delete an item's image.
* `deleteItems` - Deletes items from the library and filesystem.
* `deleteListingProvider` - Delete listing provider.
* `deleteProfile` - Deletes a profile.
* `deleteRecording` - Deletes a live tv recording.
* `deleteSubtitle` - Deletes an external subtitle file.
* `deleteTunerHost` - Deletes a tuner host.
* `deleteUser` - Deletes a user.
* `deleteUserImage` - Delete the user's image.
* `deleteUserImageByIndex` - Delete the user's image.
* `deleteUserItemRating` - Deletes a user's saved personal rating for an item.
* `disablePlugin` - Disable a plugin.
* `discoverTuners` - Discover tuners.
* `discvoverTuners` - Discover tuners.
* `displayContent` - Instructs a session to browse to an item or view.
* `downloadRemoteImage` - Downloads a remote image for an item.
* `downloadRemoteSubtitles` - Downloads a remote subtitle.
* `enablePlugin` - Enables a disabled plugin.
* `forgotPassword` - Initiates the forgot password process for a local user.
* `forgotPasswordPin` - Redeems a forgot password pin.
* `get` - Gets the search hint result.
* `getAdditionalPart` - Gets additional parts for a video.
* `getAlbumArtists` - Gets all album artists from a given item, folder, or the entire library.
* `getAllChannelFeatures` - Get all channel features.
* `getAncestors` - Gets all parents of an item.
* `getArtistByName` - Gets an artist by name.
* `getArtistImage` - Get artist image by name.
* `getArtists` - Gets all artists from a given item, folder, or the entire library.
* `getAttachment` - Get video attachment.
* `getAudioStream` - Gets an audio stream.
* `getAudioStreamByContainer` - Gets an audio stream.
* `getAuthProviders` - Get all auth providers.
* `getBitrateTestBytes` - Tests the network with a request with the size of the bitrate.
* `getBookRemoteSearchResults` - Get book remote search.
* `getBoxSetRemoteSearchResults` - Get box set remote search.
* `getBrandingCss` - Gets branding css.
* `getBrandingCss2` - Gets branding css.
* `getBrandingOptions` - Gets branding configuration.
* `getChannel` - Gets a live tv channel.
* `getChannelFeatures` - Get channel features.
* `getChannelItems` - Get channel items.
* `getChannelMappingOptions` - Get channel mapping options.
* `getChannels` - Gets available channels.
* `getConfiguration` - Gets application configuration.
* `getConfigurationPages` - Gets the configuration pages.
* `getConnectionManager` - Gets Dlna media receiver registrar xml.
* `getConnectionManager2` - Gets Dlna media receiver registrar xml.
* `getConnectionManager3` - Gets Dlna media receiver registrar xml.
* `getContentDirectory` - Gets Dlna content directory xml.
* `getContentDirectory2` - Gets Dlna content directory xml.
* `getContentDirectory3` - Gets Dlna content directory xml.
* `getCountries` - Gets known countries.
* `getCriticReviews` - Gets critic review for an item.
* `getCultures` - Gets known cultures.
* `getCurrentUser` - Gets the user based on auth token.
* `getDashboardConfigurationPage` - Gets a dashboard configuration page.
* `getDefaultDirectoryBrowser` - Get Default directory browser.
* `getDefaultListingProvider` - Gets default listings provider info.
* `getDefaultMetadataOptions` - Gets a default MetadataOptions object.
* `getDefaultProfile` - Gets the default profile.
* `getDefaultTimer` - Gets the default values for a new timer.
* `getDescriptionXml` - Get Description Xml.
* `getDescriptionXml2` - Get Description Xml.
* `getDeviceInfo` - Get info for a device.
* `getDeviceOptions` - Get options for a device.
* `getDevices` - Get Devices.
* `getDirectoryContents` - Gets the contents of a given directory in the file system.
* `getDisplayPreferences` - Get Display Preferences.
* `getDownload` - Downloads item media.
* `getDrives` - Gets available drives from the server's file system.
* `getEndpointInfo` - Gets information about the request endpoint.
* `getEpisodes` - Gets episodes for a tv season.
* `getExternalIdInfos` - Get the item's external id info.
* `getFallbackFont` - Gets a fallback font file.
* `getFallbackFontList` - Gets a list of available fallback font files.
* `getFile` - Get the original file of an item.
* `getFirstUser` - Gets the first user.
* `getFirstUser2` - Gets the first user.
* `getGeneralImage` - Get General Image.
* `getGeneralImages` - Get all general images.
* `getGenre` - Gets a genre, by name.
* `getGenreImage` - Get genre image by name.
* `getGenreImageByIndex` - Get genre image by name.
* `getGenres` - Gets all genres from a given item, folder, or the entire library.
* `getGroupingOptions` - Get user view grouping options.
* `getGuideInfo` - Get guid info.
* `getHlsAudioSegment` - Gets a video stream using HTTP live streaming.
* `getHlsAudioSegmentLegacyAac` - Gets the specified audio segment for an audio item.
* `getHlsAudioSegmentLegacyMp3` - Gets the specified audio segment for an audio item.
* `getHlsPlaylistLegacy` - Gets a hls video playlist.
* `getHlsVideoSegment` - Gets a video stream using HTTP live streaming.
* `getHlsVideoSegmentLegacy` - Gets a hls video segment.
* `getIcon` - Gets a server icon.
* `getIconId` - Gets a server icon.
* `getInstantMixFromAlbum` - Creates an instant playlist based on a given song.
* `getInstantMixFromArtists` - Creates an instant playlist based on a given song.
* `getInstantMixFromItem` - Creates an instant playlist based on a given song.
* `getInstantMixFromMusicGenre` - Creates an instant playlist based on a given song.
* `getInstantMixFromMusicGenres` - Creates an instant playlist based on a given song.
* `getInstantMixFromPlaylist` - Creates an instant playlist based on a given song.
* `getInstantMixFromSong` - Creates an instant playlist based on a given song.
* `getIntros` - Gets intros to play before the main media item plays.
* `getItem` - Gets an item from a user's library.
* `getItemCounts` - Get item counts.
* `getItemImage` - Gets the item's image.
* `getItemImage2` - Gets the item's image.
* `getItemImageByIndex` - Gets the item's image.
* `getItemImageInfos` - Get item image infos.
* `getItems` - Gets items based on a query.
* `getItemsByUserId` - Gets items based on a query.
* `getKeys` - Get all keys.
* `getLatestChannelItems` - Gets latest channel items.
* `getLatestMedia` - Gets latest media.
* `getLibraryOptionsInfo` - Gets the library options info.
* `getLineups` - Gets available lineups.
* `getLiveHlsStream` - Gets a hls live stream.
* `getLiveRecordingFile` - Gets a live tv recording stream.
* `getLiveStreamFile` - Gets a live tv channel stream.
* `getLiveTvChannels` - Gets available live tv channels.
* `getLiveTvInfo` - Gets available live tv services.
* `getLiveTvPrograms` - Gets available live tv epgs.
* `getLocalTrailers` - Gets local trailers for an item.
* `getLocalizationOptions` - Gets localization options.
* `getLogEntries` - Gets activity log entries.
* `getLogFile` - Gets a log file.
* `getMasterHlsAudioPlaylist` - Gets an audio hls playlist stream.
* `getMasterHlsVideoPlaylist` - Gets a video hls playlist stream.
* `getMediaFolders` - Gets all user media folders.
* `getMediaInfoImage` - Get media info image.
* `getMediaInfoImages` - Get all media info images.
* `getMediaReceiverRegistrar` - Gets Dlna media receiver registrar xml.
* `getMediaReceiverRegistrar2` - Gets Dlna media receiver registrar xml.
* `getMediaReceiverRegistrar3` - Gets Dlna media receiver registrar xml.
* `getMetadataEditorInfo` - Gets metadata editor info for an item.
* `getMovieRecommendations` - Gets movie recommendations.
* `getMovieRemoteSearchResults` - Get movie remote search.
* `getMusicAlbumRemoteSearchResults` - Get music album remote search.
* `getMusicArtistRemoteSearchResults` - Get music artist remote search.
* `getMusicGenre` - Gets a music genre, by name.
* `getMusicGenreImage` - Get music genre image by name.
* `getMusicGenreImageByIndex` - Get music genre image by name.
* `getMusicGenres` - Gets all music genres from a given item, folder, or the entire library.
* `getMusicVideoRemoteSearchResults` - Get music video remote search.
* `getNamedConfiguration` - Gets a named configuration.
* `getNetworkShares` - Gets network paths.
* `getNextUp` - Gets a list of next up episodes.
* `getNotificationServices` - Gets notification services.
* `getNotificationTypes` - Gets notification types.
* `getNotifications` - Gets a user's notifications.
* `getNotificationsSummary` - Gets a user's notification summary.
* `getPackageInfo` - Gets a package by name or assembly GUID.
* `getPackages` - Gets available packages.
* `getParentPath` - Gets the parent path of a given path.
* `getParentalRatings` - Gets known parental ratings.
* `getPasswordResetProviders` - Get all password reset providers.
* `getPerson` - Get person by name.
* `getPersonImage` - Get person image by name.
* `getPersonImageByIndex` - Get person image by name.
* `getPersonRemoteSearchResults` - Get person remote search.
* `getPersons` - Gets all persons.
* `getPhysicalPaths` - Gets a list of physical paths from virtual folders.
* `getPingSystem` - Pings the system.
* `getPlaybackInfo` - Gets live playback media info for an item.
* `getPlaylistItems` - Gets the original items of a playlist.
* `getPluginConfiguration` - Gets plugin configuration.
* `getPluginImage` - Gets a plugin's image.
* `getPluginManifest` - Gets a plugin's manifest.
* `getPlugins` - Gets a list of currently installed plugins.
* `getPostedPlaybackInfo` - Gets live playback media info for an item.
* `getProfile` - Gets a single profile.
* `getProfileInfos` - Get profile infos.
* `getProgram` - Gets a live tv program.
* `getPrograms` - Gets available live tv epgs.
* `getPublicSystemInfo` - Gets public information about the server.
* `getPublicUsers` - Gets a list of publicly visible users for display on a login screen.
* `getQueryFilters` - Gets query filters.
* `getQueryFiltersLegacy` - Gets legacy query filters.
* `getRatingImage` - Get rating image.
* `getRatingImages` - Get all general images.
* `getRecommendedPrograms` - Gets recommended live tv epgs.
* `getRecording` - Gets a live tv recording.
* `getRecordingFolders` - Gets recording folders.
* `getRecordingGroup` - Get recording group.
* `getRecordingGroups` - Gets live tv recording groups.
* `getRecordings` - Gets live tv recordings.
* `getRecordingsSeries` - Gets live tv recording series.
* `getRemoteImage` - Gets a remote image.
* `getRemoteImageProviders` - Gets available remote image providers for an item.
* `getRemoteImages` - Gets available remote images for an item.
* `getRemoteSearchImage` - Gets a remote image.
* `getRemoteSubtitles` - Gets the remote subtitles.
* `getRepositories` - Gets all package repositories.
* `getResumeItems` - Gets items based on a query.
* `getRootFolder` - Gets the root folder from a user's library.
* `getSchedulesDirectCountries` - Gets available countries.
* `getSeasons` - Gets seasons for a tv series.
* `getSeriesRemoteSearchResults` - Get series remote search.
* `getSeriesTimer` - Gets a live tv series timer.
* `getSeriesTimers` - Gets live tv series timers.
* `getServerLogs` - Gets a list of available server log files.
* `getSessions` - Gets a list of sessions.
* `getSimilarAlbums` - Gets similar items.
* `getSimilarArtists` - Gets similar items.
* `getSimilarItems` - Gets similar items.
* `getSimilarMovies` - Gets similar items.
* `getSimilarShows` - Gets similar items.
* `getSimilarTrailers` - Gets similar items.
* `getSpecialFeatures` - Gets special features for an item.
* `getStartupConfiguration` - Gets the initial startup wizard configuration.
* `getStatus` - Gets the current quick connect state.
* `getStudio` - Gets a studio by name.
* `getStudioImage` - Get studio image by name.
* `getStudioImageByIndex` - Get studio image by name.
* `getStudios` - Gets all studios from a given item, folder, or the entire library.
* `getSubtitle` - Gets subtitles in a specified format.
* `getSubtitlePlaylist` - Gets an HLS subtitle playlist.
* `getSubtitleWithTicks` - Gets subtitles in a specified format.
* `getSuggestions` - Gets suggestions.
* `getSystemInfo` - Gets information about the server.
* `getTask` - Get task by id.
* `getTasks` - Get tasks.
* `getThemeMedia` - Get theme songs and videos for an item.
* `getThemeSongs` - Get theme songs for an item.
* `getThemeVideos` - Get theme videos for an item.
* `getTimer` - Gets a timer.
* `getTimers` - Gets the live tv timers.
* `getTrailerRemoteSearchResults` - Get trailer remote search.
* `getTrailers` - Finds movies and trailers similar to a given trailer.
* `getTunerHostTypes` - Get tuner host types.
* `getUniversalAudioStream` - Gets an audio stream.
* `getUpcomingEpisodes` - Gets a list of upcoming episodes.
* `getUserById` - Gets a user by Id.
* `getUserImage` - Get user profile image.
* `getUserImageByIndex` - Get user profile image.
* `getUserViews` - Get user views.
* `getUsers` - Gets a list of users.
* `getUtcTime` - Gets the current UTC time.
* `getVariantHlsAudioPlaylist` - Gets an audio stream using HTTP live streaming.
* `getVariantHlsVideoPlaylist` - Gets a video stream using HTTP live streaming.
* `getVideoStream` - Gets a video stream.
* `getVideoStreamByContainer` - Gets a video stream.
* `getVirtualFolders` - Gets all virtual folders.
* `getWakeOnLanInfo` - Gets wake on lan information.
* `getYear` - Gets a year.
* `getYears` - Get years.
* `headArtistImage` - Get artist image by name.
* `headAudioStream` - Gets an audio stream.
* `headAudioStreamByContainer` - Gets an audio stream.
* `headGenreImage` - Get genre image by name.
* `headGenreImageByIndex` - Get genre image by name.
* `headItemImage` - Gets the item's image.
* `headItemImage2` - Gets the item's image.
* `headItemImageByIndex` - Gets the item's image.
* `headMasterHlsAudioPlaylist` - Gets an audio hls playlist stream.
* `headMasterHlsVideoPlaylist` - Gets a video hls playlist stream.
* `headMusicGenreImage` - Get music genre image by name.
* `headMusicGenreImageByIndex` - Get music genre image by name.
* `headPersonImage` - Get person image by name.
* `headPersonImageByIndex` - Get person image by name.
* `headStudioImage` - Get studio image by name.
* `headStudioImageByIndex` - Get studio image by name.
* `headUniversalAudioStream` - Gets an audio stream.
* `headUserImage` - Get user profile image.
* `headUserImageByIndex` - Get user profile image.
* `headVideoStream` - Gets a video stream.
* `headVideoStreamByContainer` - Gets a video stream.
* `initiate` - Initiate a new quick connect request.
* `installPackage` - Installs a package.
* `markFavoriteItem` - Marks an item as a favorite.
* `markPlayedItem` - Marks an item as played for user.
* `markUnplayedItem` - Marks an item as unplayed for user.
* `mergeVersions` - Merges videos into a single record.
* `moveItem` - Moves a playlist item.
* `onPlaybackProgress` - Reports a user's playback progress.
* `onPlaybackStart` - Reports that a user has begun playing an item.
* `onPlaybackStopped` - Reports that a user has stopped playing an item.
* `openLiveStream` - Opens a media source.
* `pingPlaybackSession` - Pings a playback session.
* `play` - Instructs a session to play an item.
* `post` - Refreshes metadata for an item.
* `postAddedMovies` - Reports that new movies have been added by an external source.
* `postAddedSeries` - Reports that new episodes of a series have been added by an external source.
* `postCapabilities` - Updates capabilities for a device.
* `postFullCapabilities` - Updates capabilities for a device.
* `postPingSystem` - Pings the system.
* `postUpdatedMedia` - Reports that new movies have been added by an external source.
* `postUpdatedMovies` - Reports that new movies have been added by an external source.
* `postUpdatedSeries` - Reports that new episodes of a series have been added by an external source.
* `postUserImage` - Sets the user image.
* `postUserImageByIndex` - Sets the user image.
* `processConnectionManagerControlRequest` - Process a connection manager control request.
* `processContentDirectoryControlRequest` - Process a content directory control request.
* `processMediaReceiverRegistrarControlRequest` - Process a media receiver registrar control request.
* `refreshLibrary` - Starts a library scan.
* `removeFromCollection` - Removes items from a collection.
* `removeFromPlaylist` - Removes items from a playlist.
* `removeMediaPath` - Remove a media path.
* `removeUserFromSession` - Removes an additional user from a session.
* `removeVirtualFolder` - Removes a virtual folder.
* `renameVirtualFolder` - Renames a virtual folder.
* `reportPlaybackProgress` - Reports playback progress within a session.
* `reportPlaybackStart` - Reports playback has started within a session.
* `reportPlaybackStopped` - Reports playback has stopped within a session.
* `reportSessionEnded` - Reports that a session has ended.
* `reportViewing` - Reports that a session is viewing an item.
* `resetTuner` - Resets a tv tuner.
* `restartApplication` - Restarts the application.
* `revokeKey` - Remove an api key.
* `searchRemoteSubtitles` - Search remote subtitles.
* `sendFullGeneralCommand` - Issues a full general command to a client.
* `sendGeneralCommand` - Issues a general command to a client.
* `sendMessageCommand` - Issues a command to a client to display a message to the user.
* `sendPlaystateCommand` - Issues a playstate command to a client.
* `sendSystemCommand` - Issues a system command to a client.
* `setChannelMapping` - Set channel mappings.
* `setItemImage` - Set item image.
* `setItemImageByIndex` - Set item image.
* `setRead` - Sets notifications as read.
* `setRemoteAccess` - Sets remote access and UPnP.
* `setRepositories` - Sets the enabled and existing package repositories.
* `setUnread` - Sets notifications as unread.
* `shutdownApplication` - Shuts down the application.
* `startTask` - Start specified task.
* `stopEncodingProcess` - Stops an active encoding.
* `stopTask` - Stop specified task.
* `syncPlayBuffering` - Notify SyncPlay group that member is buffering.
* `syncPlayCreateGroup` - Create a new SyncPlay group.
* `syncPlayGetGroups` - Gets all SyncPlay groups.
* `syncPlayJoinGroup` - Join an existing SyncPlay group.
* `syncPlayLeaveGroup` - Leave the joined SyncPlay group.
* `syncPlayMovePlaylistItem` - Request to move an item in the playlist in SyncPlay group.
* `syncPlayNextItem` - Request next item in SyncPlay group.
* `syncPlayPause` - Request pause in SyncPlay group.
* `syncPlayPing` - Update session ping.
* `syncPlayPreviousItem` - Request previous item in SyncPlay group.
* `syncPlayQueue` - Request to queue items to the playlist of a SyncPlay group.
* `syncPlayReady` - Notify SyncPlay group that member is ready for playback.
* `syncPlayRemoveFromPlaylist` - Request to remove items from the playlist in SyncPlay group.
* `syncPlaySeek` - Request seek in SyncPlay group.
* `syncPlaySetIgnoreWait` - Request SyncPlay group to ignore member during group-wait.
* `syncPlaySetNewQueue` - Request to set new playlist in SyncPlay group.
* `syncPlaySetPlaylistItem` - Request to change playlist item in SyncPlay group.
* `syncPlaySetRepeatMode` - Request to set repeat mode in SyncPlay group.
* `syncPlaySetShuffleMode` - Request to set shuffle mode in SyncPlay group.
* `syncPlayStop` - Request stop in SyncPlay group.
* `syncPlayUnpause` - Request unpause in SyncPlay group.
* `uninstallPlugin` - Uninstalls a plugin.
* `uninstallPluginByVersion` - Uninstalls a plugin by version.
* `unmarkFavoriteItem` - Unmarks item as a favorite.
* `updateConfiguration` - Updates application configuration.
* `updateDeviceOptions` - Update device options.
* `updateDisplayPreferences` - Update Display Preferences.
* `updateInitialConfiguration` - Sets the initial startup wizard configuration.
* `updateItem` - Updates an item.
* `updateItemContentType` - Updates an item's content type.
* `updateItemImageIndex` - Updates the index for an item image.
* `updateLibraryOptions` - Update library options.
* `updateMediaEncoderPath` - Updates the path to the media encoder.
* `updateMediaPath` - Updates a media path.
* `updateNamedConfiguration` - Updates named configuration.
* `updatePluginConfiguration` - Updates plugin configuration.
* `updatePluginSecurityInfo` - Updates plugin security info.
* `updateProfile` - Updates a profile.
* `updateSeriesTimer` - Updates a live tv series timer.
* `updateStartupUser` - Sets the user name and password.
* `updateTask` - Update specified task triggers.
* `updateTimer` - Updates a live tv timer.
* `updateUser` - Updates a user.
* `updateUserConfiguration` - Updates a user configuration.
* `updateUserEasyPassword` - Updates a user's easy password.
* `updateUserItemRating` - Updates a user's rating for an item.
* `updateUserPassword` - Updates a user's password.
* `updateUserPolicy` - Updates a user policy.
* `uploadSubtitle` - Upload an external subtitle file.
* `validatePath` - Validates path.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
