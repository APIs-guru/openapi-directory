import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://jellyfin.local", "http://localhost"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * activate - Temporarily activates quick connect for five minutes.
    **/
    activate(req: operations.ActivateRequest, config?: AxiosRequestConfig): Promise<operations.ActivateResponse>;
    /**
     * addListingProvider - Adds a listings provider.
    **/
    addListingProvider(req: operations.AddListingProviderRequest, config?: AxiosRequestConfig): Promise<operations.AddListingProviderResponse>;
    /**
     * addMediaPath - Add a media path to a library.
    **/
    addMediaPath(req: operations.AddMediaPathRequest, config?: AxiosRequestConfig): Promise<operations.AddMediaPathResponse>;
    /**
     * addToCollection - Adds items to a collection.
    **/
    addToCollection(req: operations.AddToCollectionRequest, config?: AxiosRequestConfig): Promise<operations.AddToCollectionResponse>;
    /**
     * addToPlaylist - Adds items to a playlist.
    **/
    addToPlaylist(req: operations.AddToPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.AddToPlaylistResponse>;
    /**
     * addTunerHost - Adds a tuner host.
    **/
    addTunerHost(req: operations.AddTunerHostRequest, config?: AxiosRequestConfig): Promise<operations.AddTunerHostResponse>;
    /**
     * addUserToSession - Adds an additional user to a session.
    **/
    addUserToSession(req: operations.AddUserToSessionRequest, config?: AxiosRequestConfig): Promise<operations.AddUserToSessionResponse>;
    /**
     * addVirtualFolder - Adds a virtual folder.
    **/
    addVirtualFolder(req: operations.AddVirtualFolderRequest, config?: AxiosRequestConfig): Promise<operations.AddVirtualFolderResponse>;
    /**
     * applySearchCriteria - Applies search criteria to an item and refreshes metadata.
    **/
    applySearchCriteria(req: operations.ApplySearchCriteriaRequest, config?: AxiosRequestConfig): Promise<operations.ApplySearchCriteriaResponse>;
    /**
     * authenticateUser - Authenticates a user.
    **/
    authenticateUser(req: operations.AuthenticateUserRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateUserResponse>;
    /**
     * authenticateUserByName - Authenticates a user by name.
    **/
    authenticateUserByName(req: operations.AuthenticateUserByNameRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateUserByNameResponse>;
    /**
     * authenticateWithQuickConnect - Authenticates a user with quick connect.
    **/
    authenticateWithQuickConnect(req: operations.AuthenticateWithQuickConnectRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateWithQuickConnectResponse>;
    /**
     * authorize - Authorizes a pending quick connect request.
    **/
    authorize(req: operations.AuthorizeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizeResponse>;
    /**
     * available - Enables or disables quick connect.
    **/
    available(req: operations.AvailableRequest, config?: AxiosRequestConfig): Promise<operations.AvailableResponse>;
    /**
     * cancelPackageInstallation - Cancels a package installation.
    **/
    cancelPackageInstallation(req: operations.CancelPackageInstallationRequest, config?: AxiosRequestConfig): Promise<operations.CancelPackageInstallationResponse>;
    /**
     * cancelSeriesTimer - Cancels a live tv series timer.
    **/
    cancelSeriesTimer(req: operations.CancelSeriesTimerRequest, config?: AxiosRequestConfig): Promise<operations.CancelSeriesTimerResponse>;
    /**
     * cancelTimer - Cancels a live tv timer.
    **/
    cancelTimer(req: operations.CancelTimerRequest, config?: AxiosRequestConfig): Promise<operations.CancelTimerResponse>;
    /**
     * closeLiveStream - Closes a media source.
    **/
    closeLiveStream(req: operations.CloseLiveStreamRequest, config?: AxiosRequestConfig): Promise<operations.CloseLiveStreamResponse>;
    /**
     * completeWizard - Completes the startup wizard.
    **/
    completeWizard(req: operations.CompleteWizardRequest, config?: AxiosRequestConfig): Promise<operations.CompleteWizardResponse>;
    /**
     * connect - Attempts to retrieve authentication information.
    **/
    connect(req: operations.ConnectRequest, config?: AxiosRequestConfig): Promise<operations.ConnectResponse>;
    /**
     * createAdminNotification - Sends a notification to all admins.
    **/
    createAdminNotification(req: operations.CreateAdminNotificationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAdminNotificationResponse>;
    /**
     * createCollection - Creates a new collection.
    **/
    createCollection(req: operations.CreateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * createKey - Create a new api key.
    **/
    createKey(req: operations.CreateKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateKeyResponse>;
    /**
     * createPlaylist - Creates a new playlist.
     *
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
    **/
    createPlaylist(req: operations.CreatePlaylistRequest, config?: AxiosRequestConfig): Promise<operations.CreatePlaylistResponse>;
    /**
     * createProfile - Creates a profile.
    **/
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * createSeriesTimer - Creates a live tv series timer.
    **/
    createSeriesTimer(req: operations.CreateSeriesTimerRequest, config?: AxiosRequestConfig): Promise<operations.CreateSeriesTimerResponse>;
    /**
     * createTimer - Creates a live tv timer.
    **/
    createTimer(req: operations.CreateTimerRequest, config?: AxiosRequestConfig): Promise<operations.CreateTimerResponse>;
    /**
     * createUserByName - Creates a user.
    **/
    createUserByName(req: operations.CreateUserByNameRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserByNameResponse>;
    /**
     * deauthorize - Deauthorize all quick connect devices for the current user.
    **/
    deauthorize(req: operations.DeauthorizeRequest, config?: AxiosRequestConfig): Promise<operations.DeauthorizeResponse>;
    /**
     * deleteAlternateSources - Removes alternate video sources.
    **/
    deleteAlternateSources(req: operations.DeleteAlternateSourcesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlternateSourcesResponse>;
    /**
     * deleteDevice - Deletes a device.
    **/
    deleteDevice(req: operations.DeleteDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceResponse>;
    /**
     * deleteItem - Deletes an item from the library and filesystem.
    **/
    deleteItem(req: operations.DeleteItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemResponse>;
    /**
     * deleteItemImage - Delete an item's image.
    **/
    deleteItemImage(req: operations.DeleteItemImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemImageResponse>;
    /**
     * deleteItemImageByIndex - Delete an item's image.
    **/
    deleteItemImageByIndex(req: operations.DeleteItemImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemImageByIndexResponse>;
    /**
     * deleteItems - Deletes items from the library and filesystem.
    **/
    deleteItems(req: operations.DeleteItemsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemsResponse>;
    /**
     * deleteListingProvider - Delete listing provider.
    **/
    deleteListingProvider(req: operations.DeleteListingProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListingProviderResponse>;
    /**
     * deleteProfile - Deletes a profile.
    **/
    deleteProfile(req: operations.DeleteProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileResponse>;
    /**
     * deleteRecording - Deletes a live tv recording.
    **/
    deleteRecording(req: operations.DeleteRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingResponse>;
    /**
     * deleteSubtitle - Deletes an external subtitle file.
    **/
    deleteSubtitle(req: operations.DeleteSubtitleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubtitleResponse>;
    /**
     * deleteTunerHost - Deletes a tuner host.
    **/
    deleteTunerHost(req: operations.DeleteTunerHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTunerHostResponse>;
    /**
     * deleteUser - Deletes a user.
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteUserImage - Delete the user's image.
    **/
    deleteUserImage(req: operations.DeleteUserImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserImageResponse>;
    /**
     * deleteUserImageByIndex - Delete the user's image.
    **/
    deleteUserImageByIndex(req: operations.DeleteUserImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserImageByIndexResponse>;
    /**
     * deleteUserItemRating - Deletes a user's saved personal rating for an item.
    **/
    deleteUserItemRating(req: operations.DeleteUserItemRatingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserItemRatingResponse>;
    /**
     * disablePlugin - Disable a plugin.
    **/
    disablePlugin(req: operations.DisablePluginRequest, config?: AxiosRequestConfig): Promise<operations.DisablePluginResponse>;
    /**
     * discoverTuners - Discover tuners.
    **/
    discoverTuners(req: operations.DiscoverTunersRequest, config?: AxiosRequestConfig): Promise<operations.DiscoverTunersResponse>;
    /**
     * discvoverTuners - Discover tuners.
    **/
    discvoverTuners(req: operations.DiscvoverTunersRequest, config?: AxiosRequestConfig): Promise<operations.DiscvoverTunersResponse>;
    /**
     * displayContent - Instructs a session to browse to an item or view.
    **/
    displayContent(req: operations.DisplayContentRequest, config?: AxiosRequestConfig): Promise<operations.DisplayContentResponse>;
    /**
     * downloadRemoteImage - Downloads a remote image for an item.
    **/
    downloadRemoteImage(req: operations.DownloadRemoteImageRequest, config?: AxiosRequestConfig): Promise<operations.DownloadRemoteImageResponse>;
    /**
     * downloadRemoteSubtitles - Downloads a remote subtitle.
    **/
    downloadRemoteSubtitles(req: operations.DownloadRemoteSubtitlesRequest, config?: AxiosRequestConfig): Promise<operations.DownloadRemoteSubtitlesResponse>;
    /**
     * enablePlugin - Enables a disabled plugin.
    **/
    enablePlugin(req: operations.EnablePluginRequest, config?: AxiosRequestConfig): Promise<operations.EnablePluginResponse>;
    /**
     * forgotPassword - Initiates the forgot password process for a local user.
    **/
    forgotPassword(req: operations.ForgotPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordResponse>;
    /**
     * forgotPasswordPin - Redeems a forgot password pin.
    **/
    forgotPasswordPin(req: operations.ForgotPasswordPinRequest, config?: AxiosRequestConfig): Promise<operations.ForgotPasswordPinResponse>;
    /**
     * get - Gets the search hint result.
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getAdditionalPart - Gets additional parts for a video.
    **/
    getAdditionalPart(req: operations.GetAdditionalPartRequest, config?: AxiosRequestConfig): Promise<operations.GetAdditionalPartResponse>;
    /**
     * getAlbumArtists - Gets all album artists from a given item, folder, or the entire library.
    **/
    getAlbumArtists(req: operations.GetAlbumArtistsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlbumArtistsResponse>;
    /**
     * getAllChannelFeatures - Get all channel features.
    **/
    getAllChannelFeatures(req: operations.GetAllChannelFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.GetAllChannelFeaturesResponse>;
    /**
     * getAncestors - Gets all parents of an item.
    **/
    getAncestors(req: operations.GetAncestorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAncestorsResponse>;
    /**
     * getArtistByName - Gets an artist by name.
    **/
    getArtistByName(req: operations.GetArtistByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetArtistByNameResponse>;
    /**
     * getArtistImage - Get artist image by name.
    **/
    getArtistImage(req: operations.GetArtistImageRequest, config?: AxiosRequestConfig): Promise<operations.GetArtistImageResponse>;
    /**
     * getArtists - Gets all artists from a given item, folder, or the entire library.
    **/
    getArtists(req: operations.GetArtistsRequest, config?: AxiosRequestConfig): Promise<operations.GetArtistsResponse>;
    /**
     * getAttachment - Get video attachment.
    **/
    getAttachment(req: operations.GetAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentResponse>;
    /**
     * getAudioStream - Gets an audio stream.
    **/
    getAudioStream(req: operations.GetAudioStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetAudioStreamResponse>;
    /**
     * getAudioStreamByContainer - Gets an audio stream.
    **/
    getAudioStreamByContainer(req: operations.GetAudioStreamByContainerRequest, config?: AxiosRequestConfig): Promise<operations.GetAudioStreamByContainerResponse>;
    /**
     * getAuthProviders - Get all auth providers.
    **/
    getAuthProviders(req: operations.GetAuthProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthProvidersResponse>;
    /**
     * getBitrateTestBytes - Tests the network with a request with the size of the bitrate.
    **/
    getBitrateTestBytes(req: operations.GetBitrateTestBytesRequest, config?: AxiosRequestConfig): Promise<operations.GetBitrateTestBytesResponse>;
    /**
     * getBookRemoteSearchResults - Get book remote search.
    **/
    getBookRemoteSearchResults(req: operations.GetBookRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetBookRemoteSearchResultsResponse>;
    /**
     * getBoxSetRemoteSearchResults - Get box set remote search.
    **/
    getBoxSetRemoteSearchResults(req: operations.GetBoxSetRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetBoxSetRemoteSearchResultsResponse>;
    /**
     * getBrandingCss - Gets branding css.
    **/
    getBrandingCss(config?: AxiosRequestConfig): Promise<operations.GetBrandingCssResponse>;
    /**
     * getBrandingCss2 - Gets branding css.
    **/
    getBrandingCss2(config?: AxiosRequestConfig): Promise<operations.GetBrandingCss2Response>;
    /**
     * getBrandingOptions - Gets branding configuration.
    **/
    getBrandingOptions(config?: AxiosRequestConfig): Promise<operations.GetBrandingOptionsResponse>;
    /**
     * getChannel - Gets a live tv channel.
    **/
    getChannel(req: operations.GetChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelResponse>;
    /**
     * getChannelFeatures - Get channel features.
    **/
    getChannelFeatures(req: operations.GetChannelFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelFeaturesResponse>;
    /**
     * getChannelItems - Get channel items.
    **/
    getChannelItems(req: operations.GetChannelItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelItemsResponse>;
    /**
     * getChannelMappingOptions - Get channel mapping options.
    **/
    getChannelMappingOptions(req: operations.GetChannelMappingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelMappingOptionsResponse>;
    /**
     * getChannels - Gets available channels.
    **/
    getChannels(req: operations.GetChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsResponse>;
    /**
     * getConfiguration - Gets application configuration.
    **/
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * getConfigurationPages - Gets the configuration pages.
    **/
    getConfigurationPages(req: operations.GetConfigurationPagesRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationPagesResponse>;
    /**
     * getConnectionManager - Gets Dlna media receiver registrar xml.
    **/
    getConnectionManager(req: operations.GetConnectionManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionManagerResponse>;
    /**
     * getConnectionManager2 - Gets Dlna media receiver registrar xml.
    **/
    getConnectionManager2(req: operations.GetConnectionManager2Request, config?: AxiosRequestConfig): Promise<operations.GetConnectionManager2Response>;
    /**
     * getConnectionManager3 - Gets Dlna media receiver registrar xml.
    **/
    getConnectionManager3(req: operations.GetConnectionManager3Request, config?: AxiosRequestConfig): Promise<operations.GetConnectionManager3Response>;
    /**
     * getContentDirectory - Gets Dlna content directory xml.
    **/
    getContentDirectory(req: operations.GetContentDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.GetContentDirectoryResponse>;
    /**
     * getContentDirectory2 - Gets Dlna content directory xml.
    **/
    getContentDirectory2(req: operations.GetContentDirectory2Request, config?: AxiosRequestConfig): Promise<operations.GetContentDirectory2Response>;
    /**
     * getContentDirectory3 - Gets Dlna content directory xml.
    **/
    getContentDirectory3(req: operations.GetContentDirectory3Request, config?: AxiosRequestConfig): Promise<operations.GetContentDirectory3Response>;
    /**
     * getCountries - Gets known countries.
    **/
    getCountries(req: operations.GetCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesResponse>;
    /**
     * getCriticReviews - Gets critic review for an item.
    **/
    getCriticReviews(req: operations.GetCriticReviewsRequest, config?: AxiosRequestConfig): Promise<operations.GetCriticReviewsResponse>;
    /**
     * getCultures - Gets known cultures.
    **/
    getCultures(req: operations.GetCulturesRequest, config?: AxiosRequestConfig): Promise<operations.GetCulturesResponse>;
    /**
     * getCurrentUser - Gets the user based on auth token.
    **/
    getCurrentUser(req: operations.GetCurrentUserRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentUserResponse>;
    /**
     * getDashboardConfigurationPage - Gets a dashboard configuration page.
    **/
    getDashboardConfigurationPage(req: operations.GetDashboardConfigurationPageRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardConfigurationPageResponse>;
    /**
     * getDefaultDirectoryBrowser - Get Default directory browser.
    **/
    getDefaultDirectoryBrowser(req: operations.GetDefaultDirectoryBrowserRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultDirectoryBrowserResponse>;
    /**
     * getDefaultListingProvider - Gets default listings provider info.
    **/
    getDefaultListingProvider(req: operations.GetDefaultListingProviderRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultListingProviderResponse>;
    /**
     * getDefaultMetadataOptions - Gets a default MetadataOptions object.
    **/
    getDefaultMetadataOptions(req: operations.GetDefaultMetadataOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultMetadataOptionsResponse>;
    /**
     * getDefaultProfile - Gets the default profile.
    **/
    getDefaultProfile(req: operations.GetDefaultProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultProfileResponse>;
    /**
     * getDefaultTimer - Gets the default values for a new timer.
    **/
    getDefaultTimer(req: operations.GetDefaultTimerRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultTimerResponse>;
    /**
     * getDescriptionXml - Get Description Xml.
    **/
    getDescriptionXml(req: operations.GetDescriptionXmlRequest, config?: AxiosRequestConfig): Promise<operations.GetDescriptionXmlResponse>;
    /**
     * getDescriptionXml2 - Get Description Xml.
    **/
    getDescriptionXml2(req: operations.GetDescriptionXml2Request, config?: AxiosRequestConfig): Promise<operations.GetDescriptionXml2Response>;
    /**
     * getDeviceInfo - Get info for a device.
    **/
    getDeviceInfo(req: operations.GetDeviceInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceInfoResponse>;
    /**
     * getDeviceOptions - Get options for a device.
    **/
    getDeviceOptions(req: operations.GetDeviceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceOptionsResponse>;
    /**
     * getDevices - Get Devices.
    **/
    getDevices(req: operations.GetDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetDevicesResponse>;
    /**
     * getDirectoryContents - Gets the contents of a given directory in the file system.
    **/
    getDirectoryContents(req: operations.GetDirectoryContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectoryContentsResponse>;
    /**
     * getDisplayPreferences - Get Display Preferences.
    **/
    getDisplayPreferences(req: operations.GetDisplayPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.GetDisplayPreferencesResponse>;
    /**
     * getDownload - Downloads item media.
    **/
    getDownload(req: operations.GetDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetDownloadResponse>;
    /**
     * getDrives - Gets available drives from the server's file system.
    **/
    getDrives(req: operations.GetDrivesRequest, config?: AxiosRequestConfig): Promise<operations.GetDrivesResponse>;
    /**
     * getEndpointInfo - Gets information about the request endpoint.
    **/
    getEndpointInfo(req: operations.GetEndpointInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetEndpointInfoResponse>;
    /**
     * getEpisodes - Gets episodes for a tv season.
    **/
    getEpisodes(req: operations.GetEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesResponse>;
    /**
     * getExternalIdInfos - Get the item's external id info.
    **/
    getExternalIdInfos(req: operations.GetExternalIdInfosRequest, config?: AxiosRequestConfig): Promise<operations.GetExternalIdInfosResponse>;
    /**
     * getFallbackFont - Gets a fallback font file.
    **/
    getFallbackFont(req: operations.GetFallbackFontRequest, config?: AxiosRequestConfig): Promise<operations.GetFallbackFontResponse>;
    /**
     * getFallbackFontList - Gets a list of available fallback font files.
    **/
    getFallbackFontList(req: operations.GetFallbackFontListRequest, config?: AxiosRequestConfig): Promise<operations.GetFallbackFontListResponse>;
    /**
     * getFile - Get the original file of an item.
    **/
    getFile(req: operations.GetFileRequest, config?: AxiosRequestConfig): Promise<operations.GetFileResponse>;
    /**
     * getFirstUser - Gets the first user.
    **/
    getFirstUser(req: operations.GetFirstUserRequest, config?: AxiosRequestConfig): Promise<operations.GetFirstUserResponse>;
    /**
     * getFirstUser2 - Gets the first user.
    **/
    getFirstUser2(req: operations.GetFirstUser2Request, config?: AxiosRequestConfig): Promise<operations.GetFirstUser2Response>;
    /**
     * getGeneralImage - Get General Image.
    **/
    getGeneralImage(req: operations.GetGeneralImageRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneralImageResponse>;
    /**
     * getGeneralImages - Get all general images.
    **/
    getGeneralImages(req: operations.GetGeneralImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneralImagesResponse>;
    /**
     * getGenre - Gets a genre, by name.
    **/
    getGenre(req: operations.GetGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreResponse>;
    /**
     * getGenreImage - Get genre image by name.
    **/
    getGenreImage(req: operations.GetGenreImageRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreImageResponse>;
    /**
     * getGenreImageByIndex - Get genre image by name.
    **/
    getGenreImageByIndex(req: operations.GetGenreImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreImageByIndexResponse>;
    /**
     * getGenres - Gets all genres from a given item, folder, or the entire library.
    **/
    getGenres(req: operations.GetGenresRequest, config?: AxiosRequestConfig): Promise<operations.GetGenresResponse>;
    /**
     * getGroupingOptions - Get user view grouping options.
    **/
    getGroupingOptions(req: operations.GetGroupingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupingOptionsResponse>;
    /**
     * getGuideInfo - Get guid info.
    **/
    getGuideInfo(req: operations.GetGuideInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetGuideInfoResponse>;
    /**
     * getHlsAudioSegment - Gets a video stream using HTTP live streaming.
    **/
    getHlsAudioSegment(req: operations.GetHlsAudioSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsAudioSegmentResponse>;
    /**
     * getHlsAudioSegmentLegacyAac - Gets the specified audio segment for an audio item.
    **/
    getHlsAudioSegmentLegacyAac(req: operations.GetHlsAudioSegmentLegacyAacRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsAudioSegmentLegacyAacResponse>;
    /**
     * getHlsAudioSegmentLegacyMp3 - Gets the specified audio segment for an audio item.
    **/
    getHlsAudioSegmentLegacyMp3(req: operations.GetHlsAudioSegmentLegacyMp3Request, config?: AxiosRequestConfig): Promise<operations.GetHlsAudioSegmentLegacyMp3Response>;
    /**
     * getHlsPlaylistLegacy - Gets a hls video playlist.
    **/
    getHlsPlaylistLegacy(req: operations.GetHlsPlaylistLegacyRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsPlaylistLegacyResponse>;
    /**
     * getHlsVideoSegment - Gets a video stream using HTTP live streaming.
    **/
    getHlsVideoSegment(req: operations.GetHlsVideoSegmentRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsVideoSegmentResponse>;
    /**
     * getHlsVideoSegmentLegacy - Gets a hls video segment.
    **/
    getHlsVideoSegmentLegacy(req: operations.GetHlsVideoSegmentLegacyRequest, config?: AxiosRequestConfig): Promise<operations.GetHlsVideoSegmentLegacyResponse>;
    /**
     * getIcon - Gets a server icon.
    **/
    getIcon(req: operations.GetIconRequest, config?: AxiosRequestConfig): Promise<operations.GetIconResponse>;
    /**
     * getIconId - Gets a server icon.
    **/
    getIconId(req: operations.GetIconIdRequest, config?: AxiosRequestConfig): Promise<operations.GetIconIdResponse>;
    /**
     * getInstantMixFromAlbum - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromAlbum(req: operations.GetInstantMixFromAlbumRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromAlbumResponse>;
    /**
     * getInstantMixFromArtists - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromArtists(req: operations.GetInstantMixFromArtistsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromArtistsResponse>;
    /**
     * getInstantMixFromItem - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromItem(req: operations.GetInstantMixFromItemRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromItemResponse>;
    /**
     * getInstantMixFromMusicGenre - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromMusicGenre(req: operations.GetInstantMixFromMusicGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromMusicGenreResponse>;
    /**
     * getInstantMixFromMusicGenres - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromMusicGenres(req: operations.GetInstantMixFromMusicGenresRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromMusicGenresResponse>;
    /**
     * getInstantMixFromPlaylist - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromPlaylist(req: operations.GetInstantMixFromPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromPlaylistResponse>;
    /**
     * getInstantMixFromSong - Creates an instant playlist based on a given song.
    **/
    getInstantMixFromSong(req: operations.GetInstantMixFromSongRequest, config?: AxiosRequestConfig): Promise<operations.GetInstantMixFromSongResponse>;
    /**
     * getIntros - Gets intros to play before the main media item plays.
    **/
    getIntros(req: operations.GetIntrosRequest, config?: AxiosRequestConfig): Promise<operations.GetIntrosResponse>;
    /**
     * getItem - Gets an item from a user's library.
    **/
    getItem(req: operations.GetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetItemResponse>;
    /**
     * getItemCounts - Get item counts.
    **/
    getItemCounts(req: operations.GetItemCountsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemCountsResponse>;
    /**
     * getItemImage - Gets the item's image.
    **/
    getItemImage(req: operations.GetItemImageRequest, config?: AxiosRequestConfig): Promise<operations.GetItemImageResponse>;
    /**
     * getItemImage2 - Gets the item's image.
    **/
    getItemImage2(req: operations.GetItemImage2Request, config?: AxiosRequestConfig): Promise<operations.GetItemImage2Response>;
    /**
     * getItemImageByIndex - Gets the item's image.
    **/
    getItemImageByIndex(req: operations.GetItemImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetItemImageByIndexResponse>;
    /**
     * getItemImageInfos - Get item image infos.
    **/
    getItemImageInfos(req: operations.GetItemImageInfosRequest, config?: AxiosRequestConfig): Promise<operations.GetItemImageInfosResponse>;
    /**
     * getItems - Gets items based on a query.
    **/
    getItems(req: operations.GetItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsResponse>;
    /**
     * getItemsByUserId - Gets items based on a query.
    **/
    getItemsByUserId(req: operations.GetItemsByUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsByUserIdResponse>;
    /**
     * getKeys - Get all keys.
    **/
    getKeys(req: operations.GetKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetKeysResponse>;
    /**
     * getLatestChannelItems - Gets latest channel items.
    **/
    getLatestChannelItems(req: operations.GetLatestChannelItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestChannelItemsResponse>;
    /**
     * getLatestMedia - Gets latest media.
    **/
    getLatestMedia(req: operations.GetLatestMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestMediaResponse>;
    /**
     * getLibraryOptionsInfo - Gets the library options info.
    **/
    getLibraryOptionsInfo(req: operations.GetLibraryOptionsInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetLibraryOptionsInfoResponse>;
    /**
     * getLineups - Gets available lineups.
    **/
    getLineups(req: operations.GetLineupsRequest, config?: AxiosRequestConfig): Promise<operations.GetLineupsResponse>;
    /**
     * getLiveHlsStream - Gets a hls live stream.
    **/
    getLiveHlsStream(req: operations.GetLiveHlsStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveHlsStreamResponse>;
    /**
     * getLiveRecordingFile - Gets a live tv recording stream.
    **/
    getLiveRecordingFile(req: operations.GetLiveRecordingFileRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveRecordingFileResponse>;
    /**
     * getLiveStreamFile - Gets a live tv channel stream.
    **/
    getLiveStreamFile(req: operations.GetLiveStreamFileRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveStreamFileResponse>;
    /**
     * getLiveTvChannels - Gets available live tv channels.
    **/
    getLiveTvChannels(req: operations.GetLiveTvChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveTvChannelsResponse>;
    /**
     * getLiveTvInfo - Gets available live tv services.
    **/
    getLiveTvInfo(req: operations.GetLiveTvInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveTvInfoResponse>;
    /**
     * getLiveTvPrograms - Gets available live tv epgs.
    **/
    getLiveTvPrograms(req: operations.GetLiveTvProgramsRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveTvProgramsResponse>;
    /**
     * getLocalTrailers - Gets local trailers for an item.
    **/
    getLocalTrailers(req: operations.GetLocalTrailersRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalTrailersResponse>;
    /**
     * getLocalizationOptions - Gets localization options.
    **/
    getLocalizationOptions(req: operations.GetLocalizationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalizationOptionsResponse>;
    /**
     * getLogEntries - Gets activity log entries.
    **/
    getLogEntries(req: operations.GetLogEntriesRequest, config?: AxiosRequestConfig): Promise<operations.GetLogEntriesResponse>;
    /**
     * getLogFile - Gets a log file.
    **/
    getLogFile(req: operations.GetLogFileRequest, config?: AxiosRequestConfig): Promise<operations.GetLogFileResponse>;
    /**
     * getMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
    **/
    getMasterHlsAudioPlaylist(req: operations.GetMasterHlsAudioPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetMasterHlsAudioPlaylistResponse>;
    /**
     * getMasterHlsVideoPlaylist - Gets a video hls playlist stream.
    **/
    getMasterHlsVideoPlaylist(req: operations.GetMasterHlsVideoPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetMasterHlsVideoPlaylistResponse>;
    /**
     * getMediaFolders - Gets all user media folders.
    **/
    getMediaFolders(req: operations.GetMediaFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaFoldersResponse>;
    /**
     * getMediaInfoImage - Get media info image.
    **/
    getMediaInfoImage(req: operations.GetMediaInfoImageRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaInfoImageResponse>;
    /**
     * getMediaInfoImages - Get all media info images.
    **/
    getMediaInfoImages(req: operations.GetMediaInfoImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaInfoImagesResponse>;
    /**
     * getMediaReceiverRegistrar - Gets Dlna media receiver registrar xml.
    **/
    getMediaReceiverRegistrar(req: operations.GetMediaReceiverRegistrarRequest, config?: AxiosRequestConfig): Promise<operations.GetMediaReceiverRegistrarResponse>;
    /**
     * getMediaReceiverRegistrar2 - Gets Dlna media receiver registrar xml.
    **/
    getMediaReceiverRegistrar2(req: operations.GetMediaReceiverRegistrar2Request, config?: AxiosRequestConfig): Promise<operations.GetMediaReceiverRegistrar2Response>;
    /**
     * getMediaReceiverRegistrar3 - Gets Dlna media receiver registrar xml.
    **/
    getMediaReceiverRegistrar3(req: operations.GetMediaReceiverRegistrar3Request, config?: AxiosRequestConfig): Promise<operations.GetMediaReceiverRegistrar3Response>;
    /**
     * getMetadataEditorInfo - Gets metadata editor info for an item.
    **/
    getMetadataEditorInfo(req: operations.GetMetadataEditorInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetMetadataEditorInfoResponse>;
    /**
     * getMovieRecommendations - Gets movie recommendations.
    **/
    getMovieRecommendations(req: operations.GetMovieRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetMovieRecommendationsResponse>;
    /**
     * getMovieRemoteSearchResults - Get movie remote search.
    **/
    getMovieRemoteSearchResults(req: operations.GetMovieRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetMovieRemoteSearchResultsResponse>;
    /**
     * getMusicAlbumRemoteSearchResults - Get music album remote search.
    **/
    getMusicAlbumRemoteSearchResults(req: operations.GetMusicAlbumRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicAlbumRemoteSearchResultsResponse>;
    /**
     * getMusicArtistRemoteSearchResults - Get music artist remote search.
    **/
    getMusicArtistRemoteSearchResults(req: operations.GetMusicArtistRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicArtistRemoteSearchResultsResponse>;
    /**
     * getMusicGenre - Gets a music genre, by name.
    **/
    getMusicGenre(req: operations.GetMusicGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicGenreResponse>;
    /**
     * getMusicGenreImage - Get music genre image by name.
    **/
    getMusicGenreImage(req: operations.GetMusicGenreImageRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicGenreImageResponse>;
    /**
     * getMusicGenreImageByIndex - Get music genre image by name.
    **/
    getMusicGenreImageByIndex(req: operations.GetMusicGenreImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicGenreImageByIndexResponse>;
    /**
     * getMusicGenres - Gets all music genres from a given item, folder, or the entire library.
    **/
    getMusicGenres(req: operations.GetMusicGenresRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicGenresResponse>;
    /**
     * getMusicVideoRemoteSearchResults - Get music video remote search.
    **/
    getMusicVideoRemoteSearchResults(req: operations.GetMusicVideoRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetMusicVideoRemoteSearchResultsResponse>;
    /**
     * getNamedConfiguration - Gets a named configuration.
    **/
    getNamedConfiguration(req: operations.GetNamedConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetNamedConfigurationResponse>;
    /**
     * getNetworkShares - Gets network paths.
    **/
    getNetworkShares(req: operations.GetNetworkSharesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSharesResponse>;
    /**
     * getNextUp - Gets a list of next up episodes.
    **/
    getNextUp(req: operations.GetNextUpRequest, config?: AxiosRequestConfig): Promise<operations.GetNextUpResponse>;
    /**
     * getNotificationServices - Gets notification services.
    **/
    getNotificationServices(req: operations.GetNotificationServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationServicesResponse>;
    /**
     * getNotificationTypes - Gets notification types.
    **/
    getNotificationTypes(req: operations.GetNotificationTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationTypesResponse>;
    /**
     * getNotifications - Gets a user's notifications.
    **/
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * getNotificationsSummary - Gets a user's notification summary.
    **/
    getNotificationsSummary(req: operations.GetNotificationsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsSummaryResponse>;
    /**
     * getPackageInfo - Gets a package by name or assembly GUID.
    **/
    getPackageInfo(req: operations.GetPackageInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPackageInfoResponse>;
    /**
     * getPackages - Gets available packages.
    **/
    getPackages(req: operations.GetPackagesRequest, config?: AxiosRequestConfig): Promise<operations.GetPackagesResponse>;
    /**
     * getParentPath - Gets the parent path of a given path.
    **/
    getParentPath(req: operations.GetParentPathRequest, config?: AxiosRequestConfig): Promise<operations.GetParentPathResponse>;
    /**
     * getParentalRatings - Gets known parental ratings.
    **/
    getParentalRatings(req: operations.GetParentalRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetParentalRatingsResponse>;
    /**
     * getPasswordResetProviders - Get all password reset providers.
    **/
    getPasswordResetProviders(req: operations.GetPasswordResetProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetPasswordResetProvidersResponse>;
    /**
     * getPerson - Get person by name.
    **/
    getPerson(req: operations.GetPersonRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonResponse>;
    /**
     * getPersonImage - Get person image by name.
    **/
    getPersonImage(req: operations.GetPersonImageRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonImageResponse>;
    /**
     * getPersonImageByIndex - Get person image by name.
    **/
    getPersonImageByIndex(req: operations.GetPersonImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonImageByIndexResponse>;
    /**
     * getPersonRemoteSearchResults - Get person remote search.
    **/
    getPersonRemoteSearchResults(req: operations.GetPersonRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonRemoteSearchResultsResponse>;
    /**
     * getPersons - Gets all persons.
    **/
    getPersons(req: operations.GetPersonsRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonsResponse>;
    /**
     * getPhysicalPaths - Gets a list of physical paths from virtual folders.
    **/
    getPhysicalPaths(req: operations.GetPhysicalPathsRequest, config?: AxiosRequestConfig): Promise<operations.GetPhysicalPathsResponse>;
    /**
     * getPingSystem - Pings the system.
    **/
    getPingSystem(config?: AxiosRequestConfig): Promise<operations.GetPingSystemResponse>;
    /**
     * getPlaybackInfo - Gets live playback media info for an item.
    **/
    getPlaybackInfo(req: operations.GetPlaybackInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaybackInfoResponse>;
    /**
     * getPlaylistItems - Gets the original items of a playlist.
    **/
    getPlaylistItems(req: operations.GetPlaylistItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistItemsResponse>;
    /**
     * getPluginConfiguration - Gets plugin configuration.
    **/
    getPluginConfiguration(req: operations.GetPluginConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginConfigurationResponse>;
    /**
     * getPluginImage - Gets a plugin's image.
    **/
    getPluginImage(req: operations.GetPluginImageRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginImageResponse>;
    /**
     * getPluginManifest - Gets a plugin's manifest.
    **/
    getPluginManifest(req: operations.GetPluginManifestRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginManifestResponse>;
    /**
     * getPlugins - Gets a list of currently installed plugins.
    **/
    getPlugins(req: operations.GetPluginsRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsResponse>;
    /**
     * getPostedPlaybackInfo - Gets live playback media info for an item.
     *
     * For backwards compatibility parameters can be sent via Query or Body, with Query having higher precedence.
    **/
    getPostedPlaybackInfo(req: operations.GetPostedPlaybackInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPostedPlaybackInfoResponse>;
    /**
     * getProfile - Gets a single profile.
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getProfileInfos - Get profile infos.
    **/
    getProfileInfos(req: operations.GetProfileInfosRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileInfosResponse>;
    /**
     * getProgram - Gets a live tv program.
    **/
    getProgram(req: operations.GetProgramRequest, config?: AxiosRequestConfig): Promise<operations.GetProgramResponse>;
    /**
     * getPrograms - Gets available live tv epgs.
    **/
    getPrograms(req: operations.GetProgramsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgramsResponse>;
    /**
     * getPublicSystemInfo - Gets public information about the server.
    **/
    getPublicSystemInfo(config?: AxiosRequestConfig): Promise<operations.GetPublicSystemInfoResponse>;
    /**
     * getPublicUsers - Gets a list of publicly visible users for display on a login screen.
    **/
    getPublicUsers(config?: AxiosRequestConfig): Promise<operations.GetPublicUsersResponse>;
    /**
     * getQueryFilters - Gets query filters.
    **/
    getQueryFilters(req: operations.GetQueryFiltersRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryFiltersResponse>;
    /**
     * getQueryFiltersLegacy - Gets legacy query filters.
    **/
    getQueryFiltersLegacy(req: operations.GetQueryFiltersLegacyRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryFiltersLegacyResponse>;
    /**
     * getRatingImage - Get rating image.
    **/
    getRatingImage(req: operations.GetRatingImageRequest, config?: AxiosRequestConfig): Promise<operations.GetRatingImageResponse>;
    /**
     * getRatingImages - Get all general images.
    **/
    getRatingImages(req: operations.GetRatingImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetRatingImagesResponse>;
    /**
     * getRecommendedPrograms - Gets recommended live tv epgs.
    **/
    getRecommendedPrograms(req: operations.GetRecommendedProgramsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendedProgramsResponse>;
    /**
     * getRecording - Gets a live tv recording.
    **/
    getRecording(req: operations.GetRecordingRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingResponse>;
    /**
     * getRecordingFolders - Gets recording folders.
    **/
    getRecordingFolders(req: operations.GetRecordingFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingFoldersResponse>;
    /**
     * getRecordingGroup - Get recording group.
    **/
    getRecordingGroup(req: operations.GetRecordingGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingGroupResponse>;
    /**
     * getRecordingGroups - Gets live tv recording groups.
    **/
    getRecordingGroups(req: operations.GetRecordingGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingGroupsResponse>;
    /**
     * getRecordings - Gets live tv recordings.
    **/
    getRecordings(req: operations.GetRecordingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingsResponse>;
    /**
     * getRecordingsSeries - Gets live tv recording series.
    **/
    getRecordingsSeries(req: operations.GetRecordingsSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetRecordingsSeriesResponse>;
    /**
     * getRemoteImage - Gets a remote image.
    **/
    getRemoteImage(req: operations.GetRemoteImageRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteImageResponse>;
    /**
     * getRemoteImageProviders - Gets available remote image providers for an item.
    **/
    getRemoteImageProviders(req: operations.GetRemoteImageProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteImageProvidersResponse>;
    /**
     * getRemoteImages - Gets available remote images for an item.
    **/
    getRemoteImages(req: operations.GetRemoteImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteImagesResponse>;
    /**
     * getRemoteSearchImage - Gets a remote image.
    **/
    getRemoteSearchImage(req: operations.GetRemoteSearchImageRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteSearchImageResponse>;
    /**
     * getRemoteSubtitles - Gets the remote subtitles.
    **/
    getRemoteSubtitles(req: operations.GetRemoteSubtitlesRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteSubtitlesResponse>;
    /**
     * getRepositories - Gets all package repositories.
    **/
    getRepositories(req: operations.GetRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesResponse>;
    /**
     * getResumeItems - Gets items based on a query.
    **/
    getResumeItems(req: operations.GetResumeItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetResumeItemsResponse>;
    /**
     * getRootFolder - Gets the root folder from a user's library.
    **/
    getRootFolder(req: operations.GetRootFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetRootFolderResponse>;
    /**
     * getSchedulesDirectCountries - Gets available countries.
    **/
    getSchedulesDirectCountries(req: operations.GetSchedulesDirectCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetSchedulesDirectCountriesResponse>;
    /**
     * getSeasons - Gets seasons for a tv series.
    **/
    getSeasons(req: operations.GetSeasonsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeasonsResponse>;
    /**
     * getSeriesRemoteSearchResults - Get series remote search.
    **/
    getSeriesRemoteSearchResults(req: operations.GetSeriesRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesRemoteSearchResultsResponse>;
    /**
     * getSeriesTimer - Gets a live tv series timer.
    **/
    getSeriesTimer(req: operations.GetSeriesTimerRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesTimerResponse>;
    /**
     * getSeriesTimers - Gets live tv series timers.
    **/
    getSeriesTimers(req: operations.GetSeriesTimersRequest, config?: AxiosRequestConfig): Promise<operations.GetSeriesTimersResponse>;
    /**
     * getServerLogs - Gets a list of available server log files.
    **/
    getServerLogs(req: operations.GetServerLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetServerLogsResponse>;
    /**
     * getSessions - Gets a list of sessions.
    **/
    getSessions(req: operations.GetSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionsResponse>;
    /**
     * getSimilarAlbums - Gets similar items.
    **/
    getSimilarAlbums(req: operations.GetSimilarAlbumsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarAlbumsResponse>;
    /**
     * getSimilarArtists - Gets similar items.
    **/
    getSimilarArtists(req: operations.GetSimilarArtistsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarArtistsResponse>;
    /**
     * getSimilarItems - Gets similar items.
    **/
    getSimilarItems(req: operations.GetSimilarItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarItemsResponse>;
    /**
     * getSimilarMovies - Gets similar items.
    **/
    getSimilarMovies(req: operations.GetSimilarMoviesRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarMoviesResponse>;
    /**
     * getSimilarShows - Gets similar items.
    **/
    getSimilarShows(req: operations.GetSimilarShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarShowsResponse>;
    /**
     * getSimilarTrailers - Gets similar items.
    **/
    getSimilarTrailers(req: operations.GetSimilarTrailersRequest, config?: AxiosRequestConfig): Promise<operations.GetSimilarTrailersResponse>;
    /**
     * getSpecialFeatures - Gets special features for an item.
    **/
    getSpecialFeatures(req: operations.GetSpecialFeaturesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecialFeaturesResponse>;
    /**
     * getStartupConfiguration - Gets the initial startup wizard configuration.
    **/
    getStartupConfiguration(req: operations.GetStartupConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetStartupConfigurationResponse>;
    /**
     * getStatus - Gets the current quick connect state.
    **/
    getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * getStudio - Gets a studio by name.
    **/
    getStudio(req: operations.GetStudioRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioResponse>;
    /**
     * getStudioImage - Get studio image by name.
    **/
    getStudioImage(req: operations.GetStudioImageRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioImageResponse>;
    /**
     * getStudioImageByIndex - Get studio image by name.
    **/
    getStudioImageByIndex(req: operations.GetStudioImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetStudioImageByIndexResponse>;
    /**
     * getStudios - Gets all studios from a given item, folder, or the entire library.
    **/
    getStudios(req: operations.GetStudiosRequest, config?: AxiosRequestConfig): Promise<operations.GetStudiosResponse>;
    /**
     * getSubtitle - Gets subtitles in a specified format.
    **/
    getSubtitle(req: operations.GetSubtitleRequest, config?: AxiosRequestConfig): Promise<operations.GetSubtitleResponse>;
    /**
     * getSubtitlePlaylist - Gets an HLS subtitle playlist.
    **/
    getSubtitlePlaylist(req: operations.GetSubtitlePlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetSubtitlePlaylistResponse>;
    /**
     * getSubtitleWithTicks - Gets subtitles in a specified format.
    **/
    getSubtitleWithTicks(req: operations.GetSubtitleWithTicksRequest, config?: AxiosRequestConfig): Promise<operations.GetSubtitleWithTicksResponse>;
    /**
     * getSuggestions - Gets suggestions.
    **/
    getSuggestions(req: operations.GetSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSuggestionsResponse>;
    /**
     * getSystemInfo - Gets information about the server.
    **/
    getSystemInfo(req: operations.GetSystemInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetSystemInfoResponse>;
    /**
     * getTask - Get task by id.
    **/
    getTask(req: operations.GetTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskResponse>;
    /**
     * getTasks - Get tasks.
    **/
    getTasks(req: operations.GetTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetTasksResponse>;
    /**
     * getThemeMedia - Get theme songs and videos for an item.
    **/
    getThemeMedia(req: operations.GetThemeMediaRequest, config?: AxiosRequestConfig): Promise<operations.GetThemeMediaResponse>;
    /**
     * getThemeSongs - Get theme songs for an item.
    **/
    getThemeSongs(req: operations.GetThemeSongsRequest, config?: AxiosRequestConfig): Promise<operations.GetThemeSongsResponse>;
    /**
     * getThemeVideos - Get theme videos for an item.
    **/
    getThemeVideos(req: operations.GetThemeVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetThemeVideosResponse>;
    /**
     * getTimer - Gets a timer.
    **/
    getTimer(req: operations.GetTimerRequest, config?: AxiosRequestConfig): Promise<operations.GetTimerResponse>;
    /**
     * getTimers - Gets the live tv timers.
    **/
    getTimers(req: operations.GetTimersRequest, config?: AxiosRequestConfig): Promise<operations.GetTimersResponse>;
    /**
     * getTrailerRemoteSearchResults - Get trailer remote search.
    **/
    getTrailerRemoteSearchResults(req: operations.GetTrailerRemoteSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrailerRemoteSearchResultsResponse>;
    /**
     * getTrailers - Finds movies and trailers similar to a given trailer.
    **/
    getTrailers(req: operations.GetTrailersRequest, config?: AxiosRequestConfig): Promise<operations.GetTrailersResponse>;
    /**
     * getTunerHostTypes - Get tuner host types.
    **/
    getTunerHostTypes(req: operations.GetTunerHostTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetTunerHostTypesResponse>;
    /**
     * getUniversalAudioStream - Gets an audio stream.
    **/
    getUniversalAudioStream(req: operations.GetUniversalAudioStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetUniversalAudioStreamResponse>;
    /**
     * getUpcomingEpisodes - Gets a list of upcoming episodes.
    **/
    getUpcomingEpisodes(req: operations.GetUpcomingEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetUpcomingEpisodesResponse>;
    /**
     * getUserById - Gets a user by Id.
    **/
    getUserById(req: operations.GetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserByIdResponse>;
    /**
     * getUserImage - Get user profile image.
    **/
    getUserImage(req: operations.GetUserImageRequest, config?: AxiosRequestConfig): Promise<operations.GetUserImageResponse>;
    /**
     * getUserImageByIndex - Get user profile image.
    **/
    getUserImageByIndex(req: operations.GetUserImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetUserImageByIndexResponse>;
    /**
     * getUserViews - Get user views.
    **/
    getUserViews(req: operations.GetUserViewsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserViewsResponse>;
    /**
     * getUsers - Gets a list of users.
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUtcTime - Gets the current UTC time.
    **/
    getUtcTime(config?: AxiosRequestConfig): Promise<operations.GetUtcTimeResponse>;
    /**
     * getVariantHlsAudioPlaylist - Gets an audio stream using HTTP live streaming.
    **/
    getVariantHlsAudioPlaylist(req: operations.GetVariantHlsAudioPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantHlsAudioPlaylistResponse>;
    /**
     * getVariantHlsVideoPlaylist - Gets a video stream using HTTP live streaming.
    **/
    getVariantHlsVideoPlaylist(req: operations.GetVariantHlsVideoPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantHlsVideoPlaylistResponse>;
    /**
     * getVideoStream - Gets a video stream.
    **/
    getVideoStream(req: operations.GetVideoStreamRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoStreamResponse>;
    /**
     * getVideoStreamByContainer - Gets a video stream.
    **/
    getVideoStreamByContainer(req: operations.GetVideoStreamByContainerRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoStreamByContainerResponse>;
    /**
     * getVirtualFolders - Gets all virtual folders.
    **/
    getVirtualFolders(req: operations.GetVirtualFoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetVirtualFoldersResponse>;
    /**
     * getWakeOnLanInfo - Gets wake on lan information.
    **/
    getWakeOnLanInfo(req: operations.GetWakeOnLanInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetWakeOnLanInfoResponse>;
    /**
     * getYear - Gets a year.
    **/
    getYear(req: operations.GetYearRequest, config?: AxiosRequestConfig): Promise<operations.GetYearResponse>;
    /**
     * getYears - Get years.
    **/
    getYears(req: operations.GetYearsRequest, config?: AxiosRequestConfig): Promise<operations.GetYearsResponse>;
    /**
     * headArtistImage - Get artist image by name.
    **/
    headArtistImage(req: operations.HeadArtistImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadArtistImageResponse>;
    /**
     * headAudioStream - Gets an audio stream.
    **/
    headAudioStream(req: operations.HeadAudioStreamRequest, config?: AxiosRequestConfig): Promise<operations.HeadAudioStreamResponse>;
    /**
     * headAudioStreamByContainer - Gets an audio stream.
    **/
    headAudioStreamByContainer(req: operations.HeadAudioStreamByContainerRequest, config?: AxiosRequestConfig): Promise<operations.HeadAudioStreamByContainerResponse>;
    /**
     * headGenreImage - Get genre image by name.
    **/
    headGenreImage(req: operations.HeadGenreImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadGenreImageResponse>;
    /**
     * headGenreImageByIndex - Get genre image by name.
    **/
    headGenreImageByIndex(req: operations.HeadGenreImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadGenreImageByIndexResponse>;
    /**
     * headItemImage - Gets the item's image.
    **/
    headItemImage(req: operations.HeadItemImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadItemImageResponse>;
    /**
     * headItemImage2 - Gets the item's image.
    **/
    headItemImage2(req: operations.HeadItemImage2Request, config?: AxiosRequestConfig): Promise<operations.HeadItemImage2Response>;
    /**
     * headItemImageByIndex - Gets the item's image.
    **/
    headItemImageByIndex(req: operations.HeadItemImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadItemImageByIndexResponse>;
    /**
     * headMasterHlsAudioPlaylist - Gets an audio hls playlist stream.
    **/
    headMasterHlsAudioPlaylist(req: operations.HeadMasterHlsAudioPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.HeadMasterHlsAudioPlaylistResponse>;
    /**
     * headMasterHlsVideoPlaylist - Gets a video hls playlist stream.
    **/
    headMasterHlsVideoPlaylist(req: operations.HeadMasterHlsVideoPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.HeadMasterHlsVideoPlaylistResponse>;
    /**
     * headMusicGenreImage - Get music genre image by name.
    **/
    headMusicGenreImage(req: operations.HeadMusicGenreImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadMusicGenreImageResponse>;
    /**
     * headMusicGenreImageByIndex - Get music genre image by name.
    **/
    headMusicGenreImageByIndex(req: operations.HeadMusicGenreImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadMusicGenreImageByIndexResponse>;
    /**
     * headPersonImage - Get person image by name.
    **/
    headPersonImage(req: operations.HeadPersonImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadPersonImageResponse>;
    /**
     * headPersonImageByIndex - Get person image by name.
    **/
    headPersonImageByIndex(req: operations.HeadPersonImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadPersonImageByIndexResponse>;
    /**
     * headStudioImage - Get studio image by name.
    **/
    headStudioImage(req: operations.HeadStudioImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadStudioImageResponse>;
    /**
     * headStudioImageByIndex - Get studio image by name.
    **/
    headStudioImageByIndex(req: operations.HeadStudioImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadStudioImageByIndexResponse>;
    /**
     * headUniversalAudioStream - Gets an audio stream.
    **/
    headUniversalAudioStream(req: operations.HeadUniversalAudioStreamRequest, config?: AxiosRequestConfig): Promise<operations.HeadUniversalAudioStreamResponse>;
    /**
     * headUserImage - Get user profile image.
    **/
    headUserImage(req: operations.HeadUserImageRequest, config?: AxiosRequestConfig): Promise<operations.HeadUserImageResponse>;
    /**
     * headUserImageByIndex - Get user profile image.
    **/
    headUserImageByIndex(req: operations.HeadUserImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.HeadUserImageByIndexResponse>;
    /**
     * headVideoStream - Gets a video stream.
    **/
    headVideoStream(req: operations.HeadVideoStreamRequest, config?: AxiosRequestConfig): Promise<operations.HeadVideoStreamResponse>;
    /**
     * headVideoStreamByContainer - Gets a video stream.
    **/
    headVideoStreamByContainer(req: operations.HeadVideoStreamByContainerRequest, config?: AxiosRequestConfig): Promise<operations.HeadVideoStreamByContainerResponse>;
    /**
     * initiate - Initiate a new quick connect request.
    **/
    initiate(config?: AxiosRequestConfig): Promise<operations.InitiateResponse>;
    /**
     * installPackage - Installs a package.
    **/
    installPackage(req: operations.InstallPackageRequest, config?: AxiosRequestConfig): Promise<operations.InstallPackageResponse>;
    /**
     * markFavoriteItem - Marks an item as a favorite.
    **/
    markFavoriteItem(req: operations.MarkFavoriteItemRequest, config?: AxiosRequestConfig): Promise<operations.MarkFavoriteItemResponse>;
    /**
     * markPlayedItem - Marks an item as played for user.
    **/
    markPlayedItem(req: operations.MarkPlayedItemRequest, config?: AxiosRequestConfig): Promise<operations.MarkPlayedItemResponse>;
    /**
     * markUnplayedItem - Marks an item as unplayed for user.
    **/
    markUnplayedItem(req: operations.MarkUnplayedItemRequest, config?: AxiosRequestConfig): Promise<operations.MarkUnplayedItemResponse>;
    /**
     * mergeVersions - Merges videos into a single record.
    **/
    mergeVersions(req: operations.MergeVersionsRequest, config?: AxiosRequestConfig): Promise<operations.MergeVersionsResponse>;
    /**
     * moveItem - Moves a playlist item.
    **/
    moveItem(req: operations.MoveItemRequest, config?: AxiosRequestConfig): Promise<operations.MoveItemResponse>;
    /**
     * onPlaybackProgress - Reports a user's playback progress.
    **/
    onPlaybackProgress(req: operations.OnPlaybackProgressRequest, config?: AxiosRequestConfig): Promise<operations.OnPlaybackProgressResponse>;
    /**
     * onPlaybackStart - Reports that a user has begun playing an item.
    **/
    onPlaybackStart(req: operations.OnPlaybackStartRequest, config?: AxiosRequestConfig): Promise<operations.OnPlaybackStartResponse>;
    /**
     * onPlaybackStopped - Reports that a user has stopped playing an item.
    **/
    onPlaybackStopped(req: operations.OnPlaybackStoppedRequest, config?: AxiosRequestConfig): Promise<operations.OnPlaybackStoppedResponse>;
    /**
     * openLiveStream - Opens a media source.
    **/
    openLiveStream(req: operations.OpenLiveStreamRequest, config?: AxiosRequestConfig): Promise<operations.OpenLiveStreamResponse>;
    /**
     * pingPlaybackSession - Pings a playback session.
    **/
    pingPlaybackSession(req: operations.PingPlaybackSessionRequest, config?: AxiosRequestConfig): Promise<operations.PingPlaybackSessionResponse>;
    /**
     * play - Instructs a session to play an item.
    **/
    play(req: operations.PlayRequest, config?: AxiosRequestConfig): Promise<operations.PlayResponse>;
    /**
     * post - Refreshes metadata for an item.
    **/
    post(req: operations.PostRequest, config?: AxiosRequestConfig): Promise<operations.PostResponse>;
    /**
     * postAddedMovies - Reports that new movies have been added by an external source.
    **/
    postAddedMovies(req: operations.PostAddedMoviesRequest, config?: AxiosRequestConfig): Promise<operations.PostAddedMoviesResponse>;
    /**
     * postAddedSeries - Reports that new episodes of a series have been added by an external source.
    **/
    postAddedSeries(req: operations.PostAddedSeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostAddedSeriesResponse>;
    /**
     * postCapabilities - Updates capabilities for a device.
    **/
    postCapabilities(req: operations.PostCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostCapabilitiesResponse>;
    /**
     * postFullCapabilities - Updates capabilities for a device.
    **/
    postFullCapabilities(req: operations.PostFullCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.PostFullCapabilitiesResponse>;
    /**
     * postPingSystem - Pings the system.
    **/
    postPingSystem(config?: AxiosRequestConfig): Promise<operations.PostPingSystemResponse>;
    /**
     * postUpdatedMedia - Reports that new movies have been added by an external source.
    **/
    postUpdatedMedia(req: operations.PostUpdatedMediaRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdatedMediaResponse>;
    /**
     * postUpdatedMovies - Reports that new movies have been added by an external source.
    **/
    postUpdatedMovies(req: operations.PostUpdatedMoviesRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdatedMoviesResponse>;
    /**
     * postUpdatedSeries - Reports that new episodes of a series have been added by an external source.
    **/
    postUpdatedSeries(req: operations.PostUpdatedSeriesRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdatedSeriesResponse>;
    /**
     * postUserImage - Sets the user image.
    **/
    postUserImage(req: operations.PostUserImageRequest, config?: AxiosRequestConfig): Promise<operations.PostUserImageResponse>;
    /**
     * postUserImageByIndex - Sets the user image.
    **/
    postUserImageByIndex(req: operations.PostUserImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.PostUserImageByIndexResponse>;
    /**
     * processConnectionManagerControlRequest - Process a connection manager control request.
    **/
    processConnectionManagerControlRequest(req: operations.ProcessConnectionManagerControlRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProcessConnectionManagerControlRequestResponse>;
    /**
     * processContentDirectoryControlRequest - Process a content directory control request.
    **/
    processContentDirectoryControlRequest(req: operations.ProcessContentDirectoryControlRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProcessContentDirectoryControlRequestResponse>;
    /**
     * processMediaReceiverRegistrarControlRequest - Process a media receiver registrar control request.
    **/
    processMediaReceiverRegistrarControlRequest(req: operations.ProcessMediaReceiverRegistrarControlRequestRequest, config?: AxiosRequestConfig): Promise<operations.ProcessMediaReceiverRegistrarControlRequestResponse>;
    /**
     * refreshLibrary - Starts a library scan.
    **/
    refreshLibrary(req: operations.RefreshLibraryRequest, config?: AxiosRequestConfig): Promise<operations.RefreshLibraryResponse>;
    /**
     * removeFromCollection - Removes items from a collection.
    **/
    removeFromCollection(req: operations.RemoveFromCollectionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFromCollectionResponse>;
    /**
     * removeFromPlaylist - Removes items from a playlist.
    **/
    removeFromPlaylist(req: operations.RemoveFromPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFromPlaylistResponse>;
    /**
     * removeMediaPath - Remove a media path.
    **/
    removeMediaPath(req: operations.RemoveMediaPathRequest, config?: AxiosRequestConfig): Promise<operations.RemoveMediaPathResponse>;
    /**
     * removeUserFromSession - Removes an additional user from a session.
    **/
    removeUserFromSession(req: operations.RemoveUserFromSessionRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserFromSessionResponse>;
    /**
     * removeVirtualFolder - Removes a virtual folder.
    **/
    removeVirtualFolder(req: operations.RemoveVirtualFolderRequest, config?: AxiosRequestConfig): Promise<operations.RemoveVirtualFolderResponse>;
    /**
     * renameVirtualFolder - Renames a virtual folder.
    **/
    renameVirtualFolder(req: operations.RenameVirtualFolderRequest, config?: AxiosRequestConfig): Promise<operations.RenameVirtualFolderResponse>;
    /**
     * reportPlaybackProgress - Reports playback progress within a session.
    **/
    reportPlaybackProgress(req: operations.ReportPlaybackProgressRequest, config?: AxiosRequestConfig): Promise<operations.ReportPlaybackProgressResponse>;
    /**
     * reportPlaybackStart - Reports playback has started within a session.
    **/
    reportPlaybackStart(req: operations.ReportPlaybackStartRequest, config?: AxiosRequestConfig): Promise<operations.ReportPlaybackStartResponse>;
    /**
     * reportPlaybackStopped - Reports playback has stopped within a session.
    **/
    reportPlaybackStopped(req: operations.ReportPlaybackStoppedRequest, config?: AxiosRequestConfig): Promise<operations.ReportPlaybackStoppedResponse>;
    /**
     * reportSessionEnded - Reports that a session has ended.
    **/
    reportSessionEnded(req: operations.ReportSessionEndedRequest, config?: AxiosRequestConfig): Promise<operations.ReportSessionEndedResponse>;
    /**
     * reportViewing - Reports that a session is viewing an item.
    **/
    reportViewing(req: operations.ReportViewingRequest, config?: AxiosRequestConfig): Promise<operations.ReportViewingResponse>;
    /**
     * resetTuner - Resets a tv tuner.
    **/
    resetTuner(req: operations.ResetTunerRequest, config?: AxiosRequestConfig): Promise<operations.ResetTunerResponse>;
    /**
     * restartApplication - Restarts the application.
    **/
    restartApplication(req: operations.RestartApplicationRequest, config?: AxiosRequestConfig): Promise<operations.RestartApplicationResponse>;
    /**
     * revokeKey - Remove an api key.
    **/
    revokeKey(req: operations.RevokeKeyRequest, config?: AxiosRequestConfig): Promise<operations.RevokeKeyResponse>;
    /**
     * searchRemoteSubtitles - Search remote subtitles.
    **/
    searchRemoteSubtitles(req: operations.SearchRemoteSubtitlesRequest, config?: AxiosRequestConfig): Promise<operations.SearchRemoteSubtitlesResponse>;
    /**
     * sendFullGeneralCommand - Issues a full general command to a client.
    **/
    sendFullGeneralCommand(req: operations.SendFullGeneralCommandRequest, config?: AxiosRequestConfig): Promise<operations.SendFullGeneralCommandResponse>;
    /**
     * sendGeneralCommand - Issues a general command to a client.
    **/
    sendGeneralCommand(req: operations.SendGeneralCommandRequest, config?: AxiosRequestConfig): Promise<operations.SendGeneralCommandResponse>;
    /**
     * sendMessageCommand - Issues a command to a client to display a message to the user.
    **/
    sendMessageCommand(req: operations.SendMessageCommandRequest, config?: AxiosRequestConfig): Promise<operations.SendMessageCommandResponse>;
    /**
     * sendPlaystateCommand - Issues a playstate command to a client.
    **/
    sendPlaystateCommand(req: operations.SendPlaystateCommandRequest, config?: AxiosRequestConfig): Promise<operations.SendPlaystateCommandResponse>;
    /**
     * sendSystemCommand - Issues a system command to a client.
    **/
    sendSystemCommand(req: operations.SendSystemCommandRequest, config?: AxiosRequestConfig): Promise<operations.SendSystemCommandResponse>;
    /**
     * setChannelMapping - Set channel mappings.
    **/
    setChannelMapping(req: operations.SetChannelMappingRequest, config?: AxiosRequestConfig): Promise<operations.SetChannelMappingResponse>;
    /**
     * setItemImage - Set item image.
    **/
    setItemImage(req: operations.SetItemImageRequest, config?: AxiosRequestConfig): Promise<operations.SetItemImageResponse>;
    /**
     * setItemImageByIndex - Set item image.
    **/
    setItemImageByIndex(req: operations.SetItemImageByIndexRequest, config?: AxiosRequestConfig): Promise<operations.SetItemImageByIndexResponse>;
    /**
     * setRead - Sets notifications as read.
    **/
    setRead(req: operations.SetReadRequest, config?: AxiosRequestConfig): Promise<operations.SetReadResponse>;
    /**
     * setRemoteAccess - Sets remote access and UPnP.
    **/
    setRemoteAccess(req: operations.SetRemoteAccessRequest, config?: AxiosRequestConfig): Promise<operations.SetRemoteAccessResponse>;
    /**
     * setRepositories - Sets the enabled and existing package repositories.
    **/
    setRepositories(req: operations.SetRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.SetRepositoriesResponse>;
    /**
     * setUnread - Sets notifications as unread.
    **/
    setUnread(req: operations.SetUnreadRequest, config?: AxiosRequestConfig): Promise<operations.SetUnreadResponse>;
    /**
     * shutdownApplication - Shuts down the application.
    **/
    shutdownApplication(req: operations.ShutdownApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ShutdownApplicationResponse>;
    /**
     * startTask - Start specified task.
    **/
    startTask(req: operations.StartTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartTaskResponse>;
    /**
     * stopEncodingProcess - Stops an active encoding.
    **/
    stopEncodingProcess(req: operations.StopEncodingProcessRequest, config?: AxiosRequestConfig): Promise<operations.StopEncodingProcessResponse>;
    /**
     * stopTask - Stop specified task.
    **/
    stopTask(req: operations.StopTaskRequest, config?: AxiosRequestConfig): Promise<operations.StopTaskResponse>;
    /**
     * syncPlayBuffering - Notify SyncPlay group that member is buffering.
    **/
    syncPlayBuffering(req: operations.SyncPlayBufferingRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayBufferingResponse>;
    /**
     * syncPlayCreateGroup - Create a new SyncPlay group.
    **/
    syncPlayCreateGroup(req: operations.SyncPlayCreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayCreateGroupResponse>;
    /**
     * syncPlayGetGroups - Gets all SyncPlay groups.
    **/
    syncPlayGetGroups(req: operations.SyncPlayGetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayGetGroupsResponse>;
    /**
     * syncPlayJoinGroup - Join an existing SyncPlay group.
    **/
    syncPlayJoinGroup(req: operations.SyncPlayJoinGroupRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayJoinGroupResponse>;
    /**
     * syncPlayLeaveGroup - Leave the joined SyncPlay group.
    **/
    syncPlayLeaveGroup(req: operations.SyncPlayLeaveGroupRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayLeaveGroupResponse>;
    /**
     * syncPlayMovePlaylistItem - Request to move an item in the playlist in SyncPlay group.
    **/
    syncPlayMovePlaylistItem(req: operations.SyncPlayMovePlaylistItemRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayMovePlaylistItemResponse>;
    /**
     * syncPlayNextItem - Request next item in SyncPlay group.
    **/
    syncPlayNextItem(req: operations.SyncPlayNextItemRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayNextItemResponse>;
    /**
     * syncPlayPause - Request pause in SyncPlay group.
    **/
    syncPlayPause(req: operations.SyncPlayPauseRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayPauseResponse>;
    /**
     * syncPlayPing - Update session ping.
    **/
    syncPlayPing(req: operations.SyncPlayPingRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayPingResponse>;
    /**
     * syncPlayPreviousItem - Request previous item in SyncPlay group.
    **/
    syncPlayPreviousItem(req: operations.SyncPlayPreviousItemRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayPreviousItemResponse>;
    /**
     * syncPlayQueue - Request to queue items to the playlist of a SyncPlay group.
    **/
    syncPlayQueue(req: operations.SyncPlayQueueRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayQueueResponse>;
    /**
     * syncPlayReady - Notify SyncPlay group that member is ready for playback.
    **/
    syncPlayReady(req: operations.SyncPlayReadyRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayReadyResponse>;
    /**
     * syncPlayRemoveFromPlaylist - Request to remove items from the playlist in SyncPlay group.
    **/
    syncPlayRemoveFromPlaylist(req: operations.SyncPlayRemoveFromPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayRemoveFromPlaylistResponse>;
    /**
     * syncPlaySeek - Request seek in SyncPlay group.
    **/
    syncPlaySeek(req: operations.SyncPlaySeekRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySeekResponse>;
    /**
     * syncPlaySetIgnoreWait - Request SyncPlay group to ignore member during group-wait.
    **/
    syncPlaySetIgnoreWait(req: operations.SyncPlaySetIgnoreWaitRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySetIgnoreWaitResponse>;
    /**
     * syncPlaySetNewQueue - Request to set new playlist in SyncPlay group.
    **/
    syncPlaySetNewQueue(req: operations.SyncPlaySetNewQueueRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySetNewQueueResponse>;
    /**
     * syncPlaySetPlaylistItem - Request to change playlist item in SyncPlay group.
    **/
    syncPlaySetPlaylistItem(req: operations.SyncPlaySetPlaylistItemRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySetPlaylistItemResponse>;
    /**
     * syncPlaySetRepeatMode - Request to set repeat mode in SyncPlay group.
    **/
    syncPlaySetRepeatMode(req: operations.SyncPlaySetRepeatModeRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySetRepeatModeResponse>;
    /**
     * syncPlaySetShuffleMode - Request to set shuffle mode in SyncPlay group.
    **/
    syncPlaySetShuffleMode(req: operations.SyncPlaySetShuffleModeRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlaySetShuffleModeResponse>;
    /**
     * syncPlayStop - Request stop in SyncPlay group.
    **/
    syncPlayStop(req: operations.SyncPlayStopRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayStopResponse>;
    /**
     * syncPlayUnpause - Request unpause in SyncPlay group.
    **/
    syncPlayUnpause(req: operations.SyncPlayUnpauseRequest, config?: AxiosRequestConfig): Promise<operations.SyncPlayUnpauseResponse>;
    /**
     * uninstallPlugin - Uninstalls a plugin.
    **/
    uninstallPlugin(req: operations.UninstallPluginRequest, config?: AxiosRequestConfig): Promise<operations.UninstallPluginResponse>;
    /**
     * uninstallPluginByVersion - Uninstalls a plugin by version.
    **/
    uninstallPluginByVersion(req: operations.UninstallPluginByVersionRequest, config?: AxiosRequestConfig): Promise<operations.UninstallPluginByVersionResponse>;
    /**
     * unmarkFavoriteItem - Unmarks item as a favorite.
    **/
    unmarkFavoriteItem(req: operations.UnmarkFavoriteItemRequest, config?: AxiosRequestConfig): Promise<operations.UnmarkFavoriteItemResponse>;
    /**
     * updateConfiguration - Updates application configuration.
    **/
    updateConfiguration(req: operations.UpdateConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationResponse>;
    /**
     * updateDeviceOptions - Update device options.
    **/
    updateDeviceOptions(req: operations.UpdateDeviceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceOptionsResponse>;
    /**
     * updateDisplayPreferences - Update Display Preferences.
    **/
    updateDisplayPreferences(req: operations.UpdateDisplayPreferencesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDisplayPreferencesResponse>;
    /**
     * updateInitialConfiguration - Sets the initial startup wizard configuration.
    **/
    updateInitialConfiguration(req: operations.UpdateInitialConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInitialConfigurationResponse>;
    /**
     * updateItem - Updates an item.
    **/
    updateItem(req: operations.UpdateItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemResponse>;
    /**
     * updateItemContentType - Updates an item's content type.
    **/
    updateItemContentType(req: operations.UpdateItemContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemContentTypeResponse>;
    /**
     * updateItemImageIndex - Updates the index for an item image.
    **/
    updateItemImageIndex(req: operations.UpdateItemImageIndexRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemImageIndexResponse>;
    /**
     * updateLibraryOptions - Update library options.
    **/
    updateLibraryOptions(req: operations.UpdateLibraryOptionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLibraryOptionsResponse>;
    /**
     * updateMediaEncoderPath - Updates the path to the media encoder.
    **/
    updateMediaEncoderPath(req: operations.UpdateMediaEncoderPathRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMediaEncoderPathResponse>;
    /**
     * updateMediaPath - Updates a media path.
    **/
    updateMediaPath(req: operations.UpdateMediaPathRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMediaPathResponse>;
    /**
     * updateNamedConfiguration - Updates named configuration.
    **/
    updateNamedConfiguration(req: operations.UpdateNamedConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNamedConfigurationResponse>;
    /**
     * updatePluginConfiguration - Updates plugin configuration.
     *
     * Accepts plugin configuration as JSON body.
    **/
    updatePluginConfiguration(req: operations.UpdatePluginConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePluginConfigurationResponse>;
    /**
     * updatePluginSecurityInfo - Updates plugin security info.
    **/
    updatePluginSecurityInfo(req: operations.UpdatePluginSecurityInfoRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePluginSecurityInfoResponse>;
    /**
     * updateProfile - Updates a profile.
    **/
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * updateSeriesTimer - Updates a live tv series timer.
    **/
    updateSeriesTimer(req: operations.UpdateSeriesTimerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSeriesTimerResponse>;
    /**
     * updateStartupUser - Sets the user name and password.
    **/
    updateStartupUser(req: operations.UpdateStartupUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStartupUserResponse>;
    /**
     * updateTask - Update specified task triggers.
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * updateTimer - Updates a live tv timer.
    **/
    updateTimer(req: operations.UpdateTimerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTimerResponse>;
    /**
     * updateUser - Updates a user.
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * updateUserConfiguration - Updates a user configuration.
    **/
    updateUserConfiguration(req: operations.UpdateUserConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserConfigurationResponse>;
    /**
     * updateUserEasyPassword - Updates a user's easy password.
    **/
    updateUserEasyPassword(req: operations.UpdateUserEasyPasswordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserEasyPasswordResponse>;
    /**
     * updateUserItemRating - Updates a user's rating for an item.
    **/
    updateUserItemRating(req: operations.UpdateUserItemRatingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserItemRatingResponse>;
    /**
     * updateUserPassword - Updates a user's password.
    **/
    updateUserPassword(req: operations.UpdateUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPasswordResponse>;
    /**
     * updateUserPolicy - Updates a user policy.
    **/
    updateUserPolicy(req: operations.UpdateUserPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserPolicyResponse>;
    /**
     * uploadSubtitle - Upload an external subtitle file.
    **/
    uploadSubtitle(req: operations.UploadSubtitleRequest, config?: AxiosRequestConfig): Promise<operations.UploadSubtitleResponse>;
    /**
     * validatePath - Validates path.
    **/
    validatePath(req: operations.ValidatePathRequest, config?: AxiosRequestConfig): Promise<operations.ValidatePathResponse>;
}
export {};
