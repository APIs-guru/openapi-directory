var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var ServerConfiguration = /** @class */ (function (_super) {
    __extends(ServerConfiguration, _super);
    function ServerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityLogRetentionDays" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "activityLogRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDiscovery" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "autoDiscovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDiscoveryTracing" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "autoDiscoveryTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseUrl" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CachePath" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "cachePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificatePassword" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "certificatePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificatePath" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "certificatePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecsUsed" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "codecsUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentTypes", elemType: NameValuePair }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "contentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorsHosts" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "corsHosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableLiveTvChannelUserDataName" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "disableLiveTvChannelUserDataName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisablePluginImages" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "disablePluginImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplaySpecialsWithinSeasons" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "displaySpecialsWithinSeasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableCaseSensitiveItemIds" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableCaseSensitiveItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDashboardResponseCaching" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableDashboardResponseCaching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableExternalContentInSuggestions" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableExternalContentInSuggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableFolderView" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableFolderView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableGroupingIntoCollections" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableGroupingIntoCollections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableHttps" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableIPV4" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableIpv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableIPV6" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableIpv6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMetrics" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMultiSocketBinding" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableMultiSocketBinding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNewOmdbSupport" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableNewOmdbSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNormalizedItemByNameIds" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableNormalizedItemByNameIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableRemoteAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSSDPTracing" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableSsdpTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSimpleArtistDetection" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableSimpleArtistDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSlowResponseWarning" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableSlowResponseWarning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableUPnP" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "enableUPnP", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatewayMonitorPeriod" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "gatewayMonitorPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HDHomerunPortRange" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "hdHomerunPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpServerPortNumber" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "httpServerPortNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpsPortNumber" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "httpsPortNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreVirtualInterfaces" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "ignoreVirtualInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageExtractionTimeoutMs" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "imageExtractionTimeoutMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSavingConvention" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "imageSavingConvention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPortAuthorized" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "isPortAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRemoteIPFilterBlacklist" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "isRemoteIpFilterBlacklist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsStartupWizardCompleted" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "isStartupWizardCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KnownProxies" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "knownProxies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryMetadataRefreshConcurrency" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "libraryMetadataRefreshConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryMonitorDelay" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "libraryMonitorDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryScanFanoutConcurrency" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "libraryScanFanoutConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalNetworkAddresses" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "localNetworkAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalNetworkSubnets" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "localNetworkSubnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogFileRetentionDays" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "logFileRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAudiobookResume" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "maxAudiobookResume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResumePct" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "maxResumePct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "metadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataNetworkPath" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "metadataNetworkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataOptions", elemType: MetadataOptions }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataPath" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "metadataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinAudiobookResume" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "minAudiobookResume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinResumeDurationSeconds" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "minResumeDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinResumePct" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "minResumePct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathSubstitutions", elemType: PathSubstitution }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "pathSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginRepositories", elemType: RepositoryInfo }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "pluginRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "preferredMetadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousVersion" }),
        __metadata("design:type", Version)
    ], ServerConfiguration.prototype, "previousVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousVersionStr" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "previousVersionStr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicHttpsPort" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "publicHttpsPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicPort" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "publicPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublishedServerUriBySubnet" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "publishedServerUriBySubnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuickConnectAvailable" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "quickConnectAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "remoteClientBitrateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteIPFilter" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "remoteIpFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveOldPlugins" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "removeOldPlugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireHttps" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "requireHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SSDPTracingFilter" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "ssdpTracingFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SaveMetadataHidden" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "saveMetadataHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkipDeserializationForBasicTypes" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "skipDeserializationForBasicTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SlowResponseThresholdMs" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "slowResponseThresholdMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortRemoveCharacters" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "sortRemoveCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortRemoveWords" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "sortRemoveWords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortReplaceCharacters" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "sortReplaceCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrustAllIP6Interfaces" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "trustAllIp6Interfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPPortRange" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "udpPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPSendCount" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "udpSendCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPSendDelay" }),
        __metadata("design:type", Number)
    ], ServerConfiguration.prototype, "udpSendDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UICulture" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "uiCulture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UPnPCreateHttpPortMap" }),
        __metadata("design:type", Boolean)
    ], ServerConfiguration.prototype, "uPnPCreateHttpPortMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UninstalledPlugins" }),
        __metadata("design:type", Array)
    ], ServerConfiguration.prototype, "uninstalledPlugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VirtualInterfaceNames" }),
        __metadata("design:type", String)
    ], ServerConfiguration.prototype, "virtualInterfaceNames", void 0);
    return ServerConfiguration;
}(SpeakeasyBase));
export { ServerConfiguration };
// ServerConfigurationInput
/**
 * Represents the server configuration.
**/
var ServerConfigurationInput = /** @class */ (function (_super) {
    __extends(ServerConfigurationInput, _super);
    function ServerConfigurationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActivityLogRetentionDays" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "activityLogRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDiscovery" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "autoDiscovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoDiscoveryTracing" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "autoDiscoveryTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaseUrl" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "baseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CachePath" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "cachePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificatePassword" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "certificatePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CertificatePath" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "certificatePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodecsUsed" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "codecsUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContentTypes", elemType: NameValuePair }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "contentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CorsHosts" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "corsHosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisableLiveTvChannelUserDataName" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "disableLiveTvChannelUserDataName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisablePluginImages" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "disablePluginImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplaySpecialsWithinSeasons" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "displaySpecialsWithinSeasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableCaseSensitiveItemIds" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableCaseSensitiveItemIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableDashboardResponseCaching" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableDashboardResponseCaching", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableExternalContentInSuggestions" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableExternalContentInSuggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableFolderView" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableFolderView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableGroupingIntoCollections" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableGroupingIntoCollections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableHttps" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableIPV4" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableIpv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableIPV6" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableIpv6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMetrics" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNewOmdbSupport" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableNewOmdbSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNormalizedItemByNameIds" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableNormalizedItemByNameIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableRemoteAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSSDPTracing" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableSsdpTracing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSimpleArtistDetection" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableSimpleArtistDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSlowResponseWarning" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableSlowResponseWarning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableUPnP" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "enableUPnP", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GatewayMonitorPeriod" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "gatewayMonitorPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HDHomerunPortRange" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "hdHomerunPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpServerPortNumber" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "httpServerPortNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HttpsPortNumber" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "httpsPortNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IgnoreVirtualInterfaces" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "ignoreVirtualInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageExtractionTimeoutMs" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "imageExtractionTimeoutMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageSavingConvention" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "imageSavingConvention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPortAuthorized" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "isPortAuthorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsRemoteIPFilterBlacklist" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "isRemoteIpFilterBlacklist", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsStartupWizardCompleted" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "isStartupWizardCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KnownProxies" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "knownProxies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryMetadataRefreshConcurrency" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "libraryMetadataRefreshConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryMonitorDelay" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "libraryMonitorDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LibraryScanFanoutConcurrency" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "libraryScanFanoutConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalNetworkAddresses" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "localNetworkAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalNetworkSubnets" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "localNetworkSubnets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LogFileRetentionDays" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "logFileRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxAudiobookResume" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "maxAudiobookResume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResumePct" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "maxResumePct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "metadataCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataNetworkPath" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "metadataNetworkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataOptions", elemType: MetadataOptions }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "metadataOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetadataPath" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "metadataPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinAudiobookResume" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "minAudiobookResume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinResumeDurationSeconds" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "minResumeDurationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinResumePct" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "minResumePct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PathSubstitutions", elemType: PathSubstitution }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "pathSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PluginRepositories", elemType: RepositoryInfo }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "pluginRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "preferredMetadataLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousVersionStr" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "previousVersionStr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicHttpsPort" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "publicHttpsPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicPort" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "publicPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublishedServerUriBySubnet" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "publishedServerUriBySubnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=QuickConnectAvailable" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "quickConnectAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "remoteClientBitrateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteIPFilter" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "remoteIpFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoveOldPlugins" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "removeOldPlugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequireHttps" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "requireHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SSDPTracingFilter" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "ssdpTracingFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SaveMetadataHidden" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "saveMetadataHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "serverName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SkipDeserializationForBasicTypes" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "skipDeserializationForBasicTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SlowResponseThresholdMs" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "slowResponseThresholdMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortRemoveCharacters" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "sortRemoveCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortRemoveWords" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "sortRemoveWords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortReplaceCharacters" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "sortReplaceCharacters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrustAllIP6Interfaces" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "trustAllIp6Interfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPPortRange" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "udpPortRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPSendCount" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "udpSendCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UDPSendDelay" }),
        __metadata("design:type", Number)
    ], ServerConfigurationInput.prototype, "udpSendDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UICulture" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "uiCulture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UPnPCreateHttpPortMap" }),
        __metadata("design:type", Boolean)
    ], ServerConfigurationInput.prototype, "uPnPCreateHttpPortMap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UninstalledPlugins" }),
        __metadata("design:type", Array)
    ], ServerConfigurationInput.prototype, "uninstalledPlugins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VirtualInterfaceNames" }),
        __metadata("design:type", String)
    ], ServerConfigurationInput.prototype, "virtualInterfaceNames", void 0);
    return ServerConfigurationInput;
}(SpeakeasyBase));
export { ServerConfigurationInput };
