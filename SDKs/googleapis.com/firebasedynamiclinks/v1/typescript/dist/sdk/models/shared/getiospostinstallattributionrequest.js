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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceInfo } from "./deviceinfo";
export var GetIosPostInstallAttributionRequestRetrievalMethodEnum;
(function (GetIosPostInstallAttributionRequestRetrievalMethodEnum) {
    GetIosPostInstallAttributionRequestRetrievalMethodEnum["UnknownPayloadRetrievalMethod"] = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD";
    GetIosPostInstallAttributionRequestRetrievalMethodEnum["ImplicitWeakMatch"] = "IMPLICIT_WEAK_MATCH";
    GetIosPostInstallAttributionRequestRetrievalMethodEnum["ExplicitWeakMatch"] = "EXPLICIT_WEAK_MATCH";
    GetIosPostInstallAttributionRequestRetrievalMethodEnum["ExplicitStrongAfterWeakMatch"] = "EXPLICIT_STRONG_AFTER_WEAK_MATCH";
})(GetIosPostInstallAttributionRequestRetrievalMethodEnum || (GetIosPostInstallAttributionRequestRetrievalMethodEnum = {}));
export var GetIosPostInstallAttributionRequestVisualStyleEnum;
(function (GetIosPostInstallAttributionRequestVisualStyleEnum) {
    GetIosPostInstallAttributionRequestVisualStyleEnum["UnknownVisualStyle"] = "UNKNOWN_VISUAL_STYLE";
    GetIosPostInstallAttributionRequestVisualStyleEnum["DefaultStyle"] = "DEFAULT_STYLE";
    GetIosPostInstallAttributionRequestVisualStyleEnum["CustomStyle"] = "CUSTOM_STYLE";
})(GetIosPostInstallAttributionRequestVisualStyleEnum || (GetIosPostInstallAttributionRequestVisualStyleEnum = {}));
// GetIosPostInstallAttributionRequest
/**
 * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
**/
var GetIosPostInstallAttributionRequest = /** @class */ (function (_super) {
    __extends(GetIosPostInstallAttributionRequest, _super);
    function GetIosPostInstallAttributionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=appInstallationTime" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "appInstallationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "bundleId", void 0);
    __decorate([
        Metadata({ data: "json, name=device" }),
        __metadata("design:type", DeviceInfo)
    ], GetIosPostInstallAttributionRequest.prototype, "device", void 0);
    __decorate([
        Metadata({ data: "json, name=iosVersion" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "iosVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=retrievalMethod" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "retrievalMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=sdkVersion" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "sdkVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=uniqueMatchLinkToCheck" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "uniqueMatchLinkToCheck", void 0);
    __decorate([
        Metadata({ data: "json, name=visualStyle" }),
        __metadata("design:type", String)
    ], GetIosPostInstallAttributionRequest.prototype, "visualStyle", void 0);
    return GetIosPostInstallAttributionRequest;
}(SpeakeasyBase));
export { GetIosPostInstallAttributionRequest };
