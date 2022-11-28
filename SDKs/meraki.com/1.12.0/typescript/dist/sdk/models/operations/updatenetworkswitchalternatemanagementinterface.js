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
var UpdateNetworkSwitchAlternateManagementInterfacePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAlternateManagementInterfacePathParams, _super);
    function UpdateNetworkSwitchAlternateManagementInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAlternateManagementInterfacePathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchAlternateManagementInterfacePathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAlternateManagementInterfacePathParams };
export var UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum;
(function (UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum) {
    UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum["Radius"] = "radius";
    UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum["Snmp"] = "snmp";
    UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum["Syslog"] = "syslog";
})(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum || (UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum = {}));
var UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches, _super);
    function UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateManagementIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches.prototype, "alternateManagementIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches.prototype, "serial", void 0);
    return UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches };
var UpdateNetworkSwitchAlternateManagementInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAlternateManagementInterfaceRequestBody, _super);
    function UpdateNetworkSwitchAlternateManagementInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocols" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBody.prototype, "protocols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switches", elemType: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBody.prototype, "switches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequestBody.prototype, "vlanId", void 0);
    return UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAlternateManagementInterfaceRequestBody };
var UpdateNetworkSwitchAlternateManagementInterfaceRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAlternateManagementInterfaceRequest, _super);
    function UpdateNetworkSwitchAlternateManagementInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchAlternateManagementInterfacePathParams)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchAlternateManagementInterfaceRequestBody)
    ], UpdateNetworkSwitchAlternateManagementInterfaceRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchAlternateManagementInterfaceRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAlternateManagementInterfaceRequest };
var UpdateNetworkSwitchAlternateManagementInterfaceResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAlternateManagementInterfaceResponse, _super);
    function UpdateNetworkSwitchAlternateManagementInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAlternateManagementInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAlternateManagementInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchAlternateManagementInterfaceResponse.prototype, "updateNetworkSwitchAlternateManagementInterface200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchAlternateManagementInterfaceResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAlternateManagementInterfaceResponse };
