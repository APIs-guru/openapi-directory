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
var UpdateNetworkSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSettingsPathParams, _super);
    function UpdateNetworkSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSettingsPathParams };
// UpdateNetworkSettingsRequestBodySecureConnect
/**
 * A hash of SecureConnect options applied to the Network.
**/
var UpdateNetworkSettingsRequestBodySecureConnect = /** @class */ (function (_super) {
    __extends(UpdateNetworkSettingsRequestBodySecureConnect, _super);
    function UpdateNetworkSettingsRequestBodySecureConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSettingsRequestBodySecureConnect.prototype, "enabled", void 0);
    return UpdateNetworkSettingsRequestBodySecureConnect;
}(SpeakeasyBase));
export { UpdateNetworkSettingsRequestBodySecureConnect };
var UpdateNetworkSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSettingsRequestBody, _super);
    function UpdateNetworkSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localStatusPageEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSettingsRequestBody.prototype, "localStatusPageEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteStatusPageEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSettingsRequestBody.prototype, "remoteStatusPageEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secureConnect" }),
        __metadata("design:type", UpdateNetworkSettingsRequestBodySecureConnect)
    ], UpdateNetworkSettingsRequestBody.prototype, "secureConnect", void 0);
    return UpdateNetworkSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSettingsRequestBody };
var UpdateNetworkSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSettingsRequest, _super);
    function UpdateNetworkSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSettingsPathParams)
    ], UpdateNetworkSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSettingsRequestBody)
    ], UpdateNetworkSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkSettingsRequest };
var UpdateNetworkSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSettingsResponse, _super);
    function UpdateNetworkSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSettingsResponse.prototype, "updateNetworkSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkSettingsResponse };
