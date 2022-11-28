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
var UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams };
export var UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
(function (UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum) {
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum["IcmpPing"] = "icmp-ping";
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum || (UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum = {}));
var UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationPorts" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound.prototype, "destinationPorts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound.prototype, "protocol", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound };
export var UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
(function (UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum) {
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum["Internet1"] = "internet1";
    UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum["Internet2"] = "internet2";
})(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum || (UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum = {}));
var UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedInbound", elemType: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules.prototype, "allowedInbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lanIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules.prototype, "lanIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules.prototype, "uplink", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules };
var UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody };
var UpdateNetworkApplianceFirewallOneToOneNatRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesRequest };
var UpdateNetworkApplianceFirewallOneToOneNatRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToOneNatRulesResponse, _super);
    function UpdateNetworkApplianceFirewallOneToOneNatRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceFirewallOneToOneNatRulesResponse.prototype, "updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceFirewallOneToOneNatRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToOneNatRulesResponse };
