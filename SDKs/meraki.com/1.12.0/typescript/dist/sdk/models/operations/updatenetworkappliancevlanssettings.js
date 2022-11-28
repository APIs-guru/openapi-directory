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
var UpdateNetworkApplianceVlansSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlansSettingsPathParams, _super);
    function UpdateNetworkApplianceVlansSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlansSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceVlansSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlansSettingsPathParams };
var UpdateNetworkApplianceVlansSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlansSettingsRequestBody, _super);
    function UpdateNetworkApplianceVlansSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlansEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVlansSettingsRequestBody.prototype, "vlansEnabled", void 0);
    return UpdateNetworkApplianceVlansSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlansSettingsRequestBody };
var UpdateNetworkApplianceVlansSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlansSettingsRequest, _super);
    function UpdateNetworkApplianceVlansSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceVlansSettingsPathParams)
    ], UpdateNetworkApplianceVlansSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceVlansSettingsRequestBody)
    ], UpdateNetworkApplianceVlansSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceVlansSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlansSettingsRequest };
var UpdateNetworkApplianceVlansSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlansSettingsResponse, _super);
    function UpdateNetworkApplianceVlansSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlansSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVlansSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceVlansSettingsResponse.prototype, "updateNetworkApplianceVlansSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceVlansSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlansSettingsResponse };
