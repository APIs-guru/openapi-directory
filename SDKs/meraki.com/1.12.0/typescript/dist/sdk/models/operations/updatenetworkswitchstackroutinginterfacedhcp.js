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
var UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interfaceId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams.prototype, "interfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams.prototype, "switchStackId", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams };
export var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum;
(function (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum) {
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["ThirtyMinutes"] = "30 minutes";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneHour"] = "1 hour";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["FourHours"] = "4 hours";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["TwelveHours"] = "12 hours";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneDay"] = "1 day";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum["OneWeek"] = "1 week";
})(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum || (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpLeaseTimeEnum = {}));
export var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum;
(function (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum) {
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpDisabled"] = "dhcpDisabled";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpRelay"] = "dhcpRelay";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum["DhcpServer"] = "dhcpServer";
})(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum || (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum = {}));
export var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum;
(function (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum) {
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Text"] = "text";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Ip"] = "ip";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Integer"] = "integer";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum["Hex"] = "hex";
})(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum || (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptionsTypeEnum = {}));
var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions.prototype, "value", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions };
export var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum;
(function (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum) {
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["GooglePublicDns"] = "googlePublicDns";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["OpenDns"] = "openDns";
    UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum["Custom"] = "custom";
})(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum || (UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDnsNameserversOptionEnum = {}));
var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments.prototype, "name", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments };
var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges.prototype, "start", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges };
var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootFileName" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "bootFileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootNextServer" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "bootNextServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootOptionsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "bootOptionsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dhcpLeaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dhcpMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpOptions }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dhcpOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dhcpRelayServerIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dnsCustomNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsNameserversOption" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "dnsNameserversOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyFixedIpAssignments }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "fixedIpAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyReservedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody.prototype, "reservedIpRanges", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody };
var UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingInterfaceDhcpPathParams)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBody)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest };
var UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse, _super);
    function UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse.prototype, "updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse };
