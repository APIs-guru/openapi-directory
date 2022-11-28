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
var UpdateNetworkApplianceVlanPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanPathParams, _super);
    function UpdateNetworkApplianceVlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vlanId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanPathParams.prototype, "vlanId", void 0);
    return UpdateNetworkApplianceVlanPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanPathParams };
export var UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
(function (UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum) {
    UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum["RunADhcpServer"] = "Run a DHCP server";
    UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum["RelayDhcpToAnotherServer"] = "Relay DHCP to another server";
    UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum["DoNotRespondToDhcpRequests"] = "Do not respond to DHCP requests";
})(UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum || (UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum = {}));
export var UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
(function (UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum) {
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["ThirtyMinutes"] = "30 minutes";
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["OneHour"] = "1 hour";
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["FourHours"] = "4 hours";
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["TwelveHours"] = "12 hours";
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["OneDay"] = "1 day";
    UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum["OneWeek"] = "1 week";
})(UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum || (UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum = {}));
export var UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
(function (UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum) {
    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum["Text"] = "text";
    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum["Ip"] = "ip";
    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum["Hex"] = "hex";
    UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum["Integer"] = "integer";
})(UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum || (UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum = {}));
var UpdateNetworkApplianceVlanRequestBodyDhcpOptions = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanRequestBodyDhcpOptions, _super);
    function UpdateNetworkApplianceVlanRequestBodyDhcpOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyDhcpOptions.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyDhcpOptions.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyDhcpOptions.prototype, "value", void 0);
    return UpdateNetworkApplianceVlanRequestBodyDhcpOptions;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanRequestBodyDhcpOptions };
var UpdateNetworkApplianceVlanRequestBodyReservedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanRequestBodyReservedIpRanges, _super);
    function UpdateNetworkApplianceVlanRequestBodyReservedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyReservedIpRanges.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyReservedIpRanges.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBodyReservedIpRanges.prototype, "start", void 0);
    return UpdateNetworkApplianceVlanRequestBodyReservedIpRanges;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanRequestBodyReservedIpRanges };
var UpdateNetworkApplianceVlanRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanRequestBody, _super);
    function UpdateNetworkApplianceVlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applianceIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "applianceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpBootFilename" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpBootFilename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpBootNextServer" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpBootNextServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpBootOptionsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpBootOptionsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpHandling" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpHandling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpLeaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpOptions", elemType: UpdateNetworkApplianceVlanRequestBodyDhcpOptions }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpOptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpRelayServerIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dhcpRelayServerIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsNameservers" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "dnsNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedIpAssignments" }),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "fixedIpAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupPolicyId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "groupPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "reservedIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "subnet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnNatSubnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanRequestBody.prototype, "vpnNatSubnet", void 0);
    return UpdateNetworkApplianceVlanRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanRequestBody };
var UpdateNetworkApplianceVlanRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanRequest, _super);
    function UpdateNetworkApplianceVlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceVlanPathParams)
    ], UpdateNetworkApplianceVlanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceVlanRequestBody)
    ], UpdateNetworkApplianceVlanRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceVlanRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanRequest };
var UpdateNetworkApplianceVlanResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVlanResponse, _super);
    function UpdateNetworkApplianceVlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVlanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceVlanResponse.prototype, "updateNetworkApplianceVlan200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceVlanResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVlanResponse };
