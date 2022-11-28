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
var UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams };
export var UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
(function (UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum) {
    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum["Udp"] = "udp";
})(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum || (UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum = {}));
var UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "localIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "localPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules.prototype, "publicPort", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules };
export var UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
(function (UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum) {
    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum["Internet1"] = "internet1";
    UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum["Internet2"] = "internet2";
})(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum || (UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum = {}));
var UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portRules", elemType: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules.prototype, "portRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplink" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules.prototype, "uplink", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules };
var UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody };
var UpdateNetworkApplianceFirewallOneToManyNatRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesRequest };
var UpdateNetworkApplianceFirewallOneToManyNatRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallOneToManyNatRulesResponse, _super);
    function UpdateNetworkApplianceFirewallOneToManyNatRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceFirewallOneToManyNatRulesResponse.prototype, "updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceFirewallOneToManyNatRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallOneToManyNatRulesResponse };
