import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ActivityLogRetentionDays" })
  activityLogRetentionDays?: number;

  @Metadata({ data: "json, name=AutoDiscovery" })
  autoDiscovery?: boolean;

  @Metadata({ data: "json, name=AutoDiscoveryTracing" })
  autoDiscoveryTracing?: boolean;

  @Metadata({ data: "json, name=BaseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=CachePath" })
  cachePath?: string;

  @Metadata({ data: "json, name=CertificatePassword" })
  certificatePassword?: string;

  @Metadata({ data: "json, name=CertificatePath" })
  certificatePath?: string;

  @Metadata({ data: "json, name=CodecsUsed" })
  codecsUsed?: string[];

  @Metadata({ data: "json, name=ContentTypes", elemType: shared.NameValuePair })
  contentTypes?: NameValuePair[];

  @Metadata({ data: "json, name=CorsHosts" })
  corsHosts?: string[];

  @Metadata({ data: "json, name=DisableLiveTvChannelUserDataName" })
  disableLiveTvChannelUserDataName?: boolean;

  @Metadata({ data: "json, name=DisablePluginImages" })
  disablePluginImages?: boolean;

  @Metadata({ data: "json, name=DisplaySpecialsWithinSeasons" })
  displaySpecialsWithinSeasons?: boolean;

  @Metadata({ data: "json, name=EnableCaseSensitiveItemIds" })
  enableCaseSensitiveItemIds?: boolean;

  @Metadata({ data: "json, name=EnableDashboardResponseCaching" })
  enableDashboardResponseCaching?: boolean;

  @Metadata({ data: "json, name=EnableExternalContentInSuggestions" })
  enableExternalContentInSuggestions?: boolean;

  @Metadata({ data: "json, name=EnableFolderView" })
  enableFolderView?: boolean;

  @Metadata({ data: "json, name=EnableGroupingIntoCollections" })
  enableGroupingIntoCollections?: boolean;

  @Metadata({ data: "json, name=EnableHttps" })
  enableHttps?: boolean;

  @Metadata({ data: "json, name=EnableIPV4" })
  enableIpv4?: boolean;

  @Metadata({ data: "json, name=EnableIPV6" })
  enableIpv6?: boolean;

  @Metadata({ data: "json, name=EnableMetrics" })
  enableMetrics?: boolean;

  @Metadata({ data: "json, name=EnableMultiSocketBinding" })
  enableMultiSocketBinding?: boolean;

  @Metadata({ data: "json, name=EnableNewOmdbSupport" })
  enableNewOmdbSupport?: boolean;

  @Metadata({ data: "json, name=EnableNormalizedItemByNameIds" })
  enableNormalizedItemByNameIds?: boolean;

  @Metadata({ data: "json, name=EnableRemoteAccess" })
  enableRemoteAccess?: boolean;

  @Metadata({ data: "json, name=EnableSSDPTracing" })
  enableSsdpTracing?: boolean;

  @Metadata({ data: "json, name=EnableSimpleArtistDetection" })
  enableSimpleArtistDetection?: boolean;

  @Metadata({ data: "json, name=EnableSlowResponseWarning" })
  enableSlowResponseWarning?: boolean;

  @Metadata({ data: "json, name=EnableUPnP" })
  enableUPnP?: boolean;

  @Metadata({ data: "json, name=GatewayMonitorPeriod" })
  gatewayMonitorPeriod?: number;

  @Metadata({ data: "json, name=HDHomerunPortRange" })
  hdHomerunPortRange?: string;

  @Metadata({ data: "json, name=HttpServerPortNumber" })
  httpServerPortNumber?: number;

  @Metadata({ data: "json, name=HttpsPortNumber" })
  httpsPortNumber?: number;

  @Metadata({ data: "json, name=IgnoreVirtualInterfaces" })
  ignoreVirtualInterfaces?: boolean;

  @Metadata({ data: "json, name=ImageExtractionTimeoutMs" })
  imageExtractionTimeoutMs?: number;

  @Metadata({ data: "json, name=ImageSavingConvention" })
  imageSavingConvention?: ImageSavingConventionEnum;

  @Metadata({ data: "json, name=IsPortAuthorized" })
  isPortAuthorized?: boolean;

  @Metadata({ data: "json, name=IsRemoteIPFilterBlacklist" })
  isRemoteIpFilterBlacklist?: boolean;

  @Metadata({ data: "json, name=IsStartupWizardCompleted" })
  isStartupWizardCompleted?: boolean;

  @Metadata({ data: "json, name=KnownProxies" })
  knownProxies?: string[];

  @Metadata({ data: "json, name=LibraryMetadataRefreshConcurrency" })
  libraryMetadataRefreshConcurrency?: number;

  @Metadata({ data: "json, name=LibraryMonitorDelay" })
  libraryMonitorDelay?: number;

  @Metadata({ data: "json, name=LibraryScanFanoutConcurrency" })
  libraryScanFanoutConcurrency?: number;

  @Metadata({ data: "json, name=LocalNetworkAddresses" })
  localNetworkAddresses?: string[];

  @Metadata({ data: "json, name=LocalNetworkSubnets" })
  localNetworkSubnets?: string[];

  @Metadata({ data: "json, name=LogFileRetentionDays" })
  logFileRetentionDays?: number;

  @Metadata({ data: "json, name=MaxAudiobookResume" })
  maxAudiobookResume?: number;

  @Metadata({ data: "json, name=MaxResumePct" })
  maxResumePct?: number;

  @Metadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @Metadata({ data: "json, name=MetadataNetworkPath" })
  metadataNetworkPath?: string;

  @Metadata({ data: "json, name=MetadataOptions", elemType: shared.MetadataOptions })
  metadataOptions?: MetadataOptions[];

  @Metadata({ data: "json, name=MetadataPath" })
  metadataPath?: string;

  @Metadata({ data: "json, name=MinAudiobookResume" })
  minAudiobookResume?: number;

  @Metadata({ data: "json, name=MinResumeDurationSeconds" })
  minResumeDurationSeconds?: number;

  @Metadata({ data: "json, name=MinResumePct" })
  minResumePct?: number;

  @Metadata({ data: "json, name=PathSubstitutions", elemType: shared.PathSubstitution })
  pathSubstitutions?: PathSubstitution[];

  @Metadata({ data: "json, name=PluginRepositories", elemType: shared.RepositoryInfo })
  pluginRepositories?: RepositoryInfo[];

  @Metadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @Metadata({ data: "json, name=PreviousVersion" })
  previousVersion?: Version;

  @Metadata({ data: "json, name=PreviousVersionStr" })
  previousVersionStr?: string;

  @Metadata({ data: "json, name=PublicHttpsPort" })
  publicHttpsPort?: number;

  @Metadata({ data: "json, name=PublicPort" })
  publicPort?: number;

  @Metadata({ data: "json, name=PublishedServerUriBySubnet" })
  publishedServerUriBySubnet?: string[];

  @Metadata({ data: "json, name=QuickConnectAvailable" })
  quickConnectAvailable?: boolean;

  @Metadata({ data: "json, name=RemoteClientBitrateLimit" })
  remoteClientBitrateLimit?: number;

  @Metadata({ data: "json, name=RemoteIPFilter" })
  remoteIpFilter?: string[];

  @Metadata({ data: "json, name=RemoveOldPlugins" })
  removeOldPlugins?: boolean;

  @Metadata({ data: "json, name=RequireHttps" })
  requireHttps?: boolean;

  @Metadata({ data: "json, name=SSDPTracingFilter" })
  ssdpTracingFilter?: string;

  @Metadata({ data: "json, name=SaveMetadataHidden" })
  saveMetadataHidden?: boolean;

  @Metadata({ data: "json, name=ServerName" })
  serverName?: string;

  @Metadata({ data: "json, name=SkipDeserializationForBasicTypes" })
  skipDeserializationForBasicTypes?: boolean;

  @Metadata({ data: "json, name=SlowResponseThresholdMs" })
  slowResponseThresholdMs?: number;

  @Metadata({ data: "json, name=SortRemoveCharacters" })
  sortRemoveCharacters?: string[];

  @Metadata({ data: "json, name=SortRemoveWords" })
  sortRemoveWords?: string[];

  @Metadata({ data: "json, name=SortReplaceCharacters" })
  sortReplaceCharacters?: string[];

  @Metadata({ data: "json, name=TrustAllIP6Interfaces" })
  trustAllIp6Interfaces?: boolean;

  @Metadata({ data: "json, name=UDPPortRange" })
  udpPortRange?: string;

  @Metadata({ data: "json, name=UDPSendCount" })
  udpSendCount?: number;

  @Metadata({ data: "json, name=UDPSendDelay" })
  udpSendDelay?: number;

  @Metadata({ data: "json, name=UICulture" })
  uiCulture?: string;

  @Metadata({ data: "json, name=UPnPCreateHttpPortMap" })
  uPnPCreateHttpPortMap?: boolean;

  @Metadata({ data: "json, name=UninstalledPlugins" })
  uninstalledPlugins?: string[];

  @Metadata({ data: "json, name=VirtualInterfaceNames" })
  virtualInterfaceNames?: string;
}
