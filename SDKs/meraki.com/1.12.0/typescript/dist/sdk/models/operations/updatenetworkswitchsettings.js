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
var UpdateNetworkSwitchSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchSettingsPathParams, _super);
    function UpdateNetworkSwitchSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchSettingsPathParams };
export var UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
(function (UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum) {
    UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum["Combined"] = "combined";
    UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum["Redundant"] = "redundant";
    UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum["UseNetworkSetting"] = "useNetworkSetting";
})(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum || (UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = {}));
var UpdateNetworkSwitchSettingsRequestBodyPowerExceptions = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchSettingsRequestBodyPowerExceptions, _super);
    function UpdateNetworkSwitchSettingsRequestBodyPowerExceptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerType" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchSettingsRequestBodyPowerExceptions.prototype, "powerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchSettingsRequestBodyPowerExceptions.prototype, "serial", void 0);
    return UpdateNetworkSwitchSettingsRequestBodyPowerExceptions;
}(SpeakeasyBase));
export { UpdateNetworkSwitchSettingsRequestBodyPowerExceptions };
var UpdateNetworkSwitchSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchSettingsRequestBody, _super);
    function UpdateNetworkSwitchSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=powerExceptions", elemType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchSettingsRequestBody.prototype, "powerExceptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useCombinedPower" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchSettingsRequestBody.prototype, "useCombinedPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchSettingsRequestBody.prototype, "vlan", void 0);
    return UpdateNetworkSwitchSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchSettingsRequestBody };
var UpdateNetworkSwitchSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchSettingsRequest, _super);
    function UpdateNetworkSwitchSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchSettingsPathParams)
    ], UpdateNetworkSwitchSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchSettingsRequestBody)
    ], UpdateNetworkSwitchSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchSettingsRequest };
var UpdateNetworkSwitchSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchSettingsResponse, _super);
    function UpdateNetworkSwitchSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchSettingsResponse.prototype, "updateNetworkSwitchSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchSettingsResponse };
