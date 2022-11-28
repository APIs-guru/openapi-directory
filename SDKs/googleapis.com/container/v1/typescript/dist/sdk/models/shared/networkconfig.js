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
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { GatewayApiConfig } from "./gatewayapiconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
export var NetworkConfigDatapathProviderEnum;
(function (NetworkConfigDatapathProviderEnum) {
    NetworkConfigDatapathProviderEnum["DatapathProviderUnspecified"] = "DATAPATH_PROVIDER_UNSPECIFIED";
    NetworkConfigDatapathProviderEnum["LegacyDatapath"] = "LEGACY_DATAPATH";
    NetworkConfigDatapathProviderEnum["AdvancedDatapath"] = "ADVANCED_DATAPATH";
})(NetworkConfigDatapathProviderEnum || (NetworkConfigDatapathProviderEnum = {}));
export var NetworkConfigPrivateIpv6GoogleAccessEnum;
(function (NetworkConfigPrivateIpv6GoogleAccessEnum) {
    NetworkConfigPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessUnspecified"] = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED";
    NetworkConfigPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessDisabled"] = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED";
    NetworkConfigPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessToGoogle"] = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE";
    NetworkConfigPrivateIpv6GoogleAccessEnum["PrivateIpv6GoogleAccessBidirectional"] = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL";
})(NetworkConfigPrivateIpv6GoogleAccessEnum || (NetworkConfigPrivateIpv6GoogleAccessEnum = {}));
// NetworkConfig
/**
 * NetworkConfig reports the relative names of network & subnetwork.
**/
var NetworkConfig = /** @class */ (function (_super) {
    __extends(NetworkConfig, _super);
    function NetworkConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datapathProvider" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "datapathProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSnatStatus" }),
        __metadata("design:type", DefaultSnatStatus)
    ], NetworkConfig.prototype, "defaultSnatStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsConfig" }),
        __metadata("design:type", DnsConfig)
    ], NetworkConfig.prototype, "dnsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableIntraNodeVisibility" }),
        __metadata("design:type", Boolean)
    ], NetworkConfig.prototype, "enableIntraNodeVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableL4ilbSubsetting" }),
        __metadata("design:type", Boolean)
    ], NetworkConfig.prototype, "enableL4ilbSubsetting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayApiConfig" }),
        __metadata("design:type", GatewayApiConfig)
    ], NetworkConfig.prototype, "gatewayApiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpv6GoogleAccess" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "privateIpv6GoogleAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceExternalIpsConfig" }),
        __metadata("design:type", ServiceExternalIPsConfig)
    ], NetworkConfig.prototype, "serviceExternalIpsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnetwork" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "subnetwork", void 0);
    return NetworkConfig;
}(SpeakeasyBase));
export { NetworkConfig };
