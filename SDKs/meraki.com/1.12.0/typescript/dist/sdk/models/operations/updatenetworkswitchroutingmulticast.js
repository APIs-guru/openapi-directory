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
var UpdateNetworkSwitchRoutingMulticastPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastPathParams, _super);
    function UpdateNetworkSwitchRoutingMulticastPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchRoutingMulticastPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastPathParams };
// UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings
/**
 * Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.
**/
var UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings, _super);
    function UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings.prototype, "floodUnknownMulticastTrafficEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=igmpSnoopingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings.prototype, "igmpSnoopingEnabled", void 0);
    return UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings };
var UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides, _super);
    function UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodUnknownMulticastTrafficEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides.prototype, "floodUnknownMulticastTrafficEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=igmpSnoopingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides.prototype, "igmpSnoopingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stacks" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides.prototype, "stacks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchProfiles" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides.prototype, "switchProfiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switches" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides.prototype, "switches", void 0);
    return UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides };
var UpdateNetworkSwitchRoutingMulticastRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRequestBody, _super);
    function UpdateNetworkSwitchRoutingMulticastRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSettings" }),
        __metadata("design:type", UpdateNetworkSwitchRoutingMulticastRequestBodyDefaultSettings)
    ], UpdateNetworkSwitchRoutingMulticastRequestBody.prototype, "defaultSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrides", elemType: UpdateNetworkSwitchRoutingMulticastRequestBodyOverrides }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchRoutingMulticastRequestBody.prototype, "overrides", void 0);
    return UpdateNetworkSwitchRoutingMulticastRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastRequestBody };
var UpdateNetworkSwitchRoutingMulticastRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastRequest, _super);
    function UpdateNetworkSwitchRoutingMulticastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchRoutingMulticastPathParams)
    ], UpdateNetworkSwitchRoutingMulticastRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchRoutingMulticastRequestBody)
    ], UpdateNetworkSwitchRoutingMulticastRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchRoutingMulticastRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastRequest };
var UpdateNetworkSwitchRoutingMulticastResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchRoutingMulticastResponse, _super);
    function UpdateNetworkSwitchRoutingMulticastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchRoutingMulticastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchRoutingMulticastResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchRoutingMulticastResponse.prototype, "updateNetworkSwitchRoutingMulticast200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchRoutingMulticastResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchRoutingMulticastResponse };
