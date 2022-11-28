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
var UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams, _super);
    function UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams };
export var UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum || (UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum = {}));
export var UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
(function (UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum) {
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Application"] = "application";
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Host"] = "host";
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum["Port"] = "port";
    UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum["IpRange"] = "ipRange";
})(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum || (UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum = {}));
var UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules, _super);
    function UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules.prototype, "value", void 0);
    return UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules };
var UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody, _super);
    function UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody };
var UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, _super);
    function UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest };
var UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse, _super);
    function UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse };
