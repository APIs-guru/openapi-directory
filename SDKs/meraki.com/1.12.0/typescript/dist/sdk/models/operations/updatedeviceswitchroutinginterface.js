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
var UpdateDeviceSwitchRoutingInterfacePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfacePathParams, _super);
    function UpdateDeviceSwitchRoutingInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfacePathParams.prototype, "interfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfacePathParams.prototype, "serial", void 0);
    return UpdateDeviceSwitchRoutingInterfacePathParams;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfacePathParams };
export var UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
(function (UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum) {
    UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["Disabled"] = "disabled";
    UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["Enabled"] = "enabled";
    UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["IgmpSnoopingQuerier"] = "IGMP snooping querier";
})(UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum || (UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = {}));
// UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/**
 * The OSPF routing settings of the interface.
**/
var UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings, _super);
    function UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "area", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "isPassiveEnabled", void 0);
    return UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings };
var UpdateDeviceSwitchRoutingInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceRequestBody, _super);
    function UpdateDeviceSwitchRoutingInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaceIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "interfaceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multicastRouting" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "multicastRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ospfSettings" }),
        __metadata("design:type", UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "ospfSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchRoutingInterfaceRequestBody.prototype, "vlanId", void 0);
    return UpdateDeviceSwitchRoutingInterfaceRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceRequestBody };
var UpdateDeviceSwitchRoutingInterfaceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceRequest, _super);
    function UpdateDeviceSwitchRoutingInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceSwitchRoutingInterfacePathParams)
    ], UpdateDeviceSwitchRoutingInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceSwitchRoutingInterfaceRequestBody)
    ], UpdateDeviceSwitchRoutingInterfaceRequest.prototype, "request", void 0);
    return UpdateDeviceSwitchRoutingInterfaceRequest;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceRequest };
var UpdateDeviceSwitchRoutingInterfaceResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceResponse, _super);
    function UpdateDeviceSwitchRoutingInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchRoutingInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceSwitchRoutingInterfaceResponse.prototype, "updateDeviceSwitchRoutingInterface200ApplicationJsonObject", void 0);
    return UpdateDeviceSwitchRoutingInterfaceResponse;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceResponse };
