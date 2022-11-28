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
export var GetIosPostInstallAttributionResponseAttributionConfidenceEnum;
(function (GetIosPostInstallAttributionResponseAttributionConfidenceEnum) {
    GetIosPostInstallAttributionResponseAttributionConfidenceEnum["UnknownAttributionConfidence"] = "UNKNOWN_ATTRIBUTION_CONFIDENCE";
    GetIosPostInstallAttributionResponseAttributionConfidenceEnum["Weak"] = "WEAK";
    GetIosPostInstallAttributionResponseAttributionConfidenceEnum["Default"] = "DEFAULT";
    GetIosPostInstallAttributionResponseAttributionConfidenceEnum["Unique"] = "UNIQUE";
})(GetIosPostInstallAttributionResponseAttributionConfidenceEnum || (GetIosPostInstallAttributionResponseAttributionConfidenceEnum = {}));
export var GetIosPostInstallAttributionResponseRequestIpVersionEnum;
(function (GetIosPostInstallAttributionResponseRequestIpVersionEnum) {
    GetIosPostInstallAttributionResponseRequestIpVersionEnum["UnknownIpVersion"] = "UNKNOWN_IP_VERSION";
    GetIosPostInstallAttributionResponseRequestIpVersionEnum["IpV4"] = "IP_V4";
    GetIosPostInstallAttributionResponseRequestIpVersionEnum["IpV6"] = "IP_V6";
})(GetIosPostInstallAttributionResponseRequestIpVersionEnum || (GetIosPostInstallAttributionResponseRequestIpVersionEnum = {}));
// GetIosPostInstallAttributionResponse
/**
 * Response for iSDK to execute strong match flow for post-install attribution.
**/
var GetIosPostInstallAttributionResponse = /** @class */ (function (_super) {
    __extends(GetIosPostInstallAttributionResponse, _super);
    function GetIosPostInstallAttributionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appMinimumVersion" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "appMinimumVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributionConfidence" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "attributionConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deepLink" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "deepLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalBrowserDestinationLink" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "externalBrowserDestinationLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallbackLink" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "fallbackLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invitationId" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "invitationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStrongMatchExecutable" }),
        __metadata("design:type", Boolean)
    ], GetIosPostInstallAttributionResponse.prototype, "isStrongMatchExecutable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchMessage" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "matchMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestIpVersion" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "requestIpVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedLink" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "requestedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolvedLink" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "resolvedLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utmCampaign" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "utmCampaign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utmContent" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "utmContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utmMedium" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "utmMedium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utmSource" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "utmSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=utmTerm" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionResponse.prototype, "utmTerm", void 0);
    return GetIosPostInstallAttributionResponse;
}(SpeakeasyBase));
export { GetIosPostInstallAttributionResponse };
