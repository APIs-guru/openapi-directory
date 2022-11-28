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
var UpdateNetworkWirelessSsidEapOverridePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverridePathParams, _super);
    function UpdateNetworkWirelessSsidEapOverridePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidEapOverridePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidEapOverridePathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidEapOverridePathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverridePathParams };
// UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
/**
 * EAPOL Key settings.
**/
var UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey, _super);
    function UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutInMs" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey.prototype, "timeoutInMs", void 0);
    return UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey };
// UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
/**
 * EAP settings for identity requests.
**/
var UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity, _super);
    function UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity.prototype, "timeout", void 0);
    return UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity };
var UpdateNetworkWirelessSsidEapOverrideRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverrideRequestBody, _super);
    function UpdateNetworkWirelessSsidEapOverrideRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eapolKey" }),
        __metadata("design:type", UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBody.prototype, "eapolKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBody.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetries" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBody.prototype, "maxRetries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideRequestBody.prototype, "timeout", void 0);
    return UpdateNetworkWirelessSsidEapOverrideRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverrideRequestBody };
var UpdateNetworkWirelessSsidEapOverrideRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverrideRequest, _super);
    function UpdateNetworkWirelessSsidEapOverrideRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidEapOverridePathParams)
    ], UpdateNetworkWirelessSsidEapOverrideRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidEapOverrideRequestBody)
    ], UpdateNetworkWirelessSsidEapOverrideRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidEapOverrideRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverrideRequest };
var UpdateNetworkWirelessSsidEapOverrideResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidEapOverrideResponse, _super);
    function UpdateNetworkWirelessSsidEapOverrideResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidEapOverrideResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidEapOverrideResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidEapOverrideResponse.prototype, "updateNetworkWirelessSsidEapOverride200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidEapOverrideResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidEapOverrideResponse };
