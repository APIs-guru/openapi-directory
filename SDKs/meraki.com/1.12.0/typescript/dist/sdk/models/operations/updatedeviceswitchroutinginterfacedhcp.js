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
var UpdateDeviceSwitchRoutingInterfaceDhcpPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpPathParams, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpPathParams.prototype, "interfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpPathParams.prototype, "serial", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpPathParams;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpPathParams };
export var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
(function (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum) {
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["ThirtyMinutes"] = "30 minutes";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneHour"] = "1 hour";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["FourHours"] = "4 hours";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["TwelveHours"] = "12 hours";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneDay"] = "1 day";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneWeek"] = "1 week";
})(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum || (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = {}));
export var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
(function (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum) {
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpDisabled"] = "dhcpDisabled";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpRelay"] = "dhcpRelay";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpServer"] = "dhcpServer";
})(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum || (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum = {}));
export var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
(function (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum) {
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Text"] = "text";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Ip"] = "ip";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Integer"] = "integer";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Hex"] = "hex";
})(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum || (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = {}));
var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "value", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions };
export var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
(function (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum) {
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["GooglePublicDns"] = "googlePublicDns";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["OpenDns"] = "openDns";
    UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["Custom"] = "custom";
})(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum || (UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum = {}));
var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "name", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments };
var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "start", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges };
var UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootFileName" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "bootFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootNextServer" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "bootNextServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOptionsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "bootOptionsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dhcpLeaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpMode" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dhcpMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpOptions }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dhcpOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dhcpRelayServerIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dnsCustomNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsNameserversOption" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "dnsNameserversOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyFixedIpAssignments }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "fixedIpAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyReservedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody.prototype, "reservedIpRanges", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody };
var UpdateDeviceSwitchRoutingInterfaceDhcpRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpRequest, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceSwitchRoutingInterfaceDhcpPathParams)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceSwitchRoutingInterfaceDhcpRequestBody)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpRequest.prototype, "request", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpRequest;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpRequest };
var UpdateDeviceSwitchRoutingInterfaceDhcpResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchRoutingInterfaceDhcpResponse, _super);
    function UpdateDeviceSwitchRoutingInterfaceDhcpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceSwitchRoutingInterfaceDhcpResponse.prototype, "updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJsonObject", void 0);
    return UpdateDeviceSwitchRoutingInterfaceDhcpResponse;
}(SpeakeasyBase));
export { UpdateDeviceSwitchRoutingInterfaceDhcpResponse };
