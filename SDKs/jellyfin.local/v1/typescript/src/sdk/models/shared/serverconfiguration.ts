import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { ImageSavingConventionEnum } from "./imagesavingconventionenum";
import { MetadataOptions } from "./metadataoptions";
import { PathSubstitution } from "./pathsubstitution";
import { RepositoryInfo } from "./repositoryinfo";
import { Version } from "./version";



// ServerConfiguration
/** 
 * Represents the server configuration.
**/
export class ServerConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityLogRetentionDays" })
  activityLogRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoDiscovery" })
  autoDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDiscoveryTracing" })
  autoDiscoveryTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BaseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=CachePath" })
  cachePath?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePassword" })
  certificatePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePath" })
  certificatePath?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecsUsed" })
  codecsUsed?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContentTypes", elemType: NameValuePair })
  contentTypes?: NameValuePair[];

  @SpeakeasyMetadata({ data: "json, name=CorsHosts" })
  corsHosts?: string[];

  @SpeakeasyMetadata({ data: "json, name=DisableLiveTvChannelUserDataName" })
  disableLiveTvChannelUserDataName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisablePluginImages" })
  disablePluginImages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisplaySpecialsWithinSeasons" })
  displaySpecialsWithinSeasons?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableCaseSensitiveItemIds" })
  enableCaseSensitiveItemIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableDashboardResponseCaching" })
  enableDashboardResponseCaching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableExternalContentInSuggestions" })
  enableExternalContentInSuggestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableFolderView" })
  enableFolderView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableGroupingIntoCollections" })
  enableGroupingIntoCollections?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableHttps" })
  enableHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableIPV4" })
  enableIpv4?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableIPV6" })
  enableIpv6?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMetrics" })
  enableMetrics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMultiSocketBinding" })
  enableMultiSocketBinding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNewOmdbSupport" })
  enableNewOmdbSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNormalizedItemByNameIds" })
  enableNormalizedItemByNameIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSSDPTracing" })
  enableSsdpTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSimpleArtistDetection" })
  enableSimpleArtistDetection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSlowResponseWarning" })
  enableSlowResponseWarning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableUPnP" })
  enableUPnP?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GatewayMonitorPeriod" })
  gatewayMonitorPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=HDHomerunPortRange" })
  hdHomerunPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpServerPortNumber" })
  httpServerPortNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=HttpsPortNumber" })
  httpsPortNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IgnoreVirtualInterfaces" })
  ignoreVirtualInterfaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageExtractionTimeoutMs" })
  imageExtractionTimeoutMs?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageSavingConvention" })
  imageSavingConvention?: ImageSavingConventionEnum;

  @SpeakeasyMetadata({ data: "json, name=IsPortAuthorized" })
  isPortAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRemoteIPFilterBlacklist" })
  isRemoteIpFilterBlacklist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsStartupWizardCompleted" })
  isStartupWizardCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KnownProxies" })
  knownProxies?: string[];

  @SpeakeasyMetadata({ data: "json, name=LibraryMetadataRefreshConcurrency" })
  libraryMetadataRefreshConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=LibraryMonitorDelay" })
  libraryMonitorDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=LibraryScanFanoutConcurrency" })
  libraryScanFanoutConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=LocalNetworkAddresses" })
  localNetworkAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=LocalNetworkSubnets" })
  localNetworkSubnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=LogFileRetentionDays" })
  logFileRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAudiobookResume" })
  maxAudiobookResume?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxResumePct" })
  maxResumePct?: number;

  @SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataNetworkPath" })
  metadataNetworkPath?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataOptions", elemType: MetadataOptions })
  metadataOptions?: MetadataOptions[];

  @SpeakeasyMetadata({ data: "json, name=MetadataPath" })
  metadataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=MinAudiobookResume" })
  minAudiobookResume?: number;

  @SpeakeasyMetadata({ data: "json, name=MinResumeDurationSeconds" })
  minResumeDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MinResumePct" })
  minResumePct?: number;

  @SpeakeasyMetadata({ data: "json, name=PathSubstitutions", elemType: PathSubstitution })
  pathSubstitutions?: PathSubstitution[];

  @SpeakeasyMetadata({ data: "json, name=PluginRepositories", elemType: RepositoryInfo })
  pluginRepositories?: RepositoryInfo[];

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousVersion" })
  previousVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=PreviousVersionStr" })
  previousVersionStr?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicHttpsPort" })
  publicHttpsPort?: number;

  @SpeakeasyMetadata({ data: "json, name=PublicPort" })
  publicPort?: number;

  @SpeakeasyMetadata({ data: "json, name=PublishedServerUriBySubnet" })
  publishedServerUriBySubnet?: string[];

  @SpeakeasyMetadata({ data: "json, name=QuickConnectAvailable" })
  quickConnectAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=RemoteIPFilter" })
  remoteIpFilter?: string[];

  @SpeakeasyMetadata({ data: "json, name=RemoveOldPlugins" })
  removeOldPlugins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireHttps" })
  requireHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SSDPTracingFilter" })
  ssdpTracingFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=SaveMetadataHidden" })
  saveMetadataHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=SkipDeserializationForBasicTypes" })
  skipDeserializationForBasicTypes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SlowResponseThresholdMs" })
  slowResponseThresholdMs?: number;

  @SpeakeasyMetadata({ data: "json, name=SortRemoveCharacters" })
  sortRemoveCharacters?: string[];

  @SpeakeasyMetadata({ data: "json, name=SortRemoveWords" })
  sortRemoveWords?: string[];

  @SpeakeasyMetadata({ data: "json, name=SortReplaceCharacters" })
  sortReplaceCharacters?: string[];

  @SpeakeasyMetadata({ data: "json, name=TrustAllIP6Interfaces" })
  trustAllIp6Interfaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UDPPortRange" })
  udpPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=UDPSendCount" })
  udpSendCount?: number;

  @SpeakeasyMetadata({ data: "json, name=UDPSendDelay" })
  udpSendDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=UICulture" })
  uiCulture?: string;

  @SpeakeasyMetadata({ data: "json, name=UPnPCreateHttpPortMap" })
  uPnPCreateHttpPortMap?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UninstalledPlugins" })
  uninstalledPlugins?: string[];

  @SpeakeasyMetadata({ data: "json, name=VirtualInterfaceNames" })
  virtualInterfaceNames?: string;
}


// ServerConfigurationInput
/** 
 * Represents the server configuration.
**/
export class ServerConfigurationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActivityLogRetentionDays" })
  activityLogRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=AutoDiscovery" })
  autoDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutoDiscoveryTracing" })
  autoDiscoveryTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BaseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=CachePath" })
  cachePath?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePassword" })
  certificatePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=CertificatePath" })
  certificatePath?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecsUsed" })
  codecsUsed?: string[];

  @SpeakeasyMetadata({ data: "json, name=ContentTypes", elemType: NameValuePair })
  contentTypes?: NameValuePair[];

  @SpeakeasyMetadata({ data: "json, name=CorsHosts" })
  corsHosts?: string[];

  @SpeakeasyMetadata({ data: "json, name=DisableLiveTvChannelUserDataName" })
  disableLiveTvChannelUserDataName?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisablePluginImages" })
  disablePluginImages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DisplaySpecialsWithinSeasons" })
  displaySpecialsWithinSeasons?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableCaseSensitiveItemIds" })
  enableCaseSensitiveItemIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableDashboardResponseCaching" })
  enableDashboardResponseCaching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableExternalContentInSuggestions" })
  enableExternalContentInSuggestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableFolderView" })
  enableFolderView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableGroupingIntoCollections" })
  enableGroupingIntoCollections?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableHttps" })
  enableHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableIPV4" })
  enableIpv4?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableIPV6" })
  enableIpv6?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableMetrics" })
  enableMetrics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNewOmdbSupport" })
  enableNewOmdbSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNormalizedItemByNameIds" })
  enableNormalizedItemByNameIds?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSSDPTracing" })
  enableSsdpTracing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSimpleArtistDetection" })
  enableSimpleArtistDetection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableSlowResponseWarning" })
  enableSlowResponseWarning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableUPnP" })
  enableUPnP?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GatewayMonitorPeriod" })
  gatewayMonitorPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=HDHomerunPortRange" })
  hdHomerunPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpServerPortNumber" })
  httpServerPortNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=HttpsPortNumber" })
  httpsPortNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IgnoreVirtualInterfaces" })
  ignoreVirtualInterfaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ImageExtractionTimeoutMs" })
  imageExtractionTimeoutMs?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageSavingConvention" })
  imageSavingConvention?: ImageSavingConventionEnum;

  @SpeakeasyMetadata({ data: "json, name=IsPortAuthorized" })
  isPortAuthorized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRemoteIPFilterBlacklist" })
  isRemoteIpFilterBlacklist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsStartupWizardCompleted" })
  isStartupWizardCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KnownProxies" })
  knownProxies?: string[];

  @SpeakeasyMetadata({ data: "json, name=LibraryMetadataRefreshConcurrency" })
  libraryMetadataRefreshConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=LibraryMonitorDelay" })
  libraryMonitorDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=LibraryScanFanoutConcurrency" })
  libraryScanFanoutConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=LocalNetworkAddresses" })
  localNetworkAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=LocalNetworkSubnets" })
  localNetworkSubnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=LogFileRetentionDays" })
  logFileRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxAudiobookResume" })
  maxAudiobookResume?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxResumePct" })
  maxResumePct?: number;

  @SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataNetworkPath" })
  metadataNetworkPath?: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataOptions", elemType: MetadataOptions })
  metadataOptions?: MetadataOptions[];

  @SpeakeasyMetadata({ data: "json, name=MetadataPath" })
  metadataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=MinAudiobookResume" })
  minAudiobookResume?: number;

  @SpeakeasyMetadata({ data: "json, name=MinResumeDurationSeconds" })
  minResumeDurationSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=MinResumePct" })
  minResumePct?: number;

  @SpeakeasyMetadata({ data: "json, name=PathSubstitutions", elemType: PathSubstitution })
  pathSubstitutions?: PathSubstitution[];

  @SpeakeasyMetadata({ data: "json, name=PluginRepositories", elemType: RepositoryInfo })
  pluginRepositories?: RepositoryInfo[];

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PreviousVersionStr" })
  previousVersionStr?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicHttpsPort" })
  publicHttpsPort?: number;

  @SpeakeasyMetadata({ data: "json, name=PublicPort" })
  publicPort?: number;

  @SpeakeasyMetadata({ data: "json, name=PublishedServerUriBySubnet" })
  publishedServerUriBySubnet?: string[];

  @SpeakeasyMetadata({ data: "json, name=QuickConnectAvailable" })
  quickConnectAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=RemoteIPFilter" })
  remoteIpFilter?: string[];

  @SpeakeasyMetadata({ data: "json, name=RemoveOldPlugins" })
  removeOldPlugins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequireHttps" })
  requireHttps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SSDPTracingFilter" })
  ssdpTracingFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=SaveMetadataHidden" })
  saveMetadataHidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName?: string;

  @SpeakeasyMetadata({ data: "json, name=SkipDeserializationForBasicTypes" })
  skipDeserializationForBasicTypes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SlowResponseThresholdMs" })
  slowResponseThresholdMs?: number;

  @SpeakeasyMetadata({ data: "json, name=SortRemoveCharacters" })
  sortRemoveCharacters?: string[];

  @SpeakeasyMetadata({ data: "json, name=SortRemoveWords" })
  sortRemoveWords?: string[];

  @SpeakeasyMetadata({ data: "json, name=SortReplaceCharacters" })
  sortReplaceCharacters?: string[];

  @SpeakeasyMetadata({ data: "json, name=TrustAllIP6Interfaces" })
  trustAllIp6Interfaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UDPPortRange" })
  udpPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=UDPSendCount" })
  udpSendCount?: number;

  @SpeakeasyMetadata({ data: "json, name=UDPSendDelay" })
  udpSendDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=UICulture" })
  uiCulture?: string;

  @SpeakeasyMetadata({ data: "json, name=UPnPCreateHttpPortMap" })
  uPnPCreateHttpPortMap?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UninstalledPlugins" })
  uninstalledPlugins?: string[];

  @SpeakeasyMetadata({ data: "json, name=VirtualInterfaceNames" })
  virtualInterfaceNames?: string;
}
