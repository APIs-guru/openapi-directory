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
var CreateDeviceSwitchRoutingInterfacePathParams = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingInterfacePathParams, _super);
    function CreateDeviceSwitchRoutingInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfacePathParams.prototype, "serial", void 0);
    return CreateDeviceSwitchRoutingInterfacePathParams;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingInterfacePathParams };
export var CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
(function (CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum) {
    CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["Disabled"] = "disabled";
    CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["Enabled"] = "enabled";
    CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum["IgmpSnoopingQuerier"] = "IGMP snooping querier";
})(CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum || (CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = {}));
// CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings
/**
 * The OSPF routing settings of the interface.
**/
var CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings, _super);
    function CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=area" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "area", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPassiveEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings.prototype, "isPassiveEnabled", void 0);
    return CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings };
var CreateDeviceSwitchRoutingInterfaceRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingInterfaceRequestBody, _super);
    function CreateDeviceSwitchRoutingInterfaceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultGateway" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "defaultGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interfaceIp" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "interfaceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multicastRouting" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "multicastRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ospfSettings" }),
        __metadata("design:type", CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "ospfSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", Number)
    ], CreateDeviceSwitchRoutingInterfaceRequestBody.prototype, "vlanId", void 0);
    return CreateDeviceSwitchRoutingInterfaceRequestBody;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingInterfaceRequestBody };
var CreateDeviceSwitchRoutingInterfaceRequest = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingInterfaceRequest, _super);
    function CreateDeviceSwitchRoutingInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeviceSwitchRoutingInterfacePathParams)
    ], CreateDeviceSwitchRoutingInterfaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeviceSwitchRoutingInterfaceRequestBody)
    ], CreateDeviceSwitchRoutingInterfaceRequest.prototype, "request", void 0);
    return CreateDeviceSwitchRoutingInterfaceRequest;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingInterfaceRequest };
var CreateDeviceSwitchRoutingInterfaceResponse = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingInterfaceResponse, _super);
    function CreateDeviceSwitchRoutingInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeviceSwitchRoutingInterfaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDeviceSwitchRoutingInterfaceResponse.prototype, "createDeviceSwitchRoutingInterface201ApplicationJsonObject", void 0);
    return CreateDeviceSwitchRoutingInterfaceResponse;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingInterfaceResponse };
