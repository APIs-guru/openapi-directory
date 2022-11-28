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
var UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams };
export var UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum || (UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum = {}));
export var UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;
(function (UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum) {
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum || (UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "destCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "destPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "srcCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "srcPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslogEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules.prototype, "syslogEnabled", void 0);
    return UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules };
var UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody };
var UpdateNetworkApplianceFirewallCellularFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, _super);
    function UpdateNetworkApplianceFirewallCellularFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallCellularFirewallRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallCellularFirewallRulesRequest };
var UpdateNetworkApplianceFirewallCellularFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallCellularFirewallRulesResponse, _super);
    function UpdateNetworkApplianceFirewallCellularFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceFirewallCellularFirewallRulesResponse.prototype, "updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceFirewallCellularFirewallRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallCellularFirewallRulesResponse };
