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
var GetNetworkApplianceFirewallL3FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceFirewallL3FirewallRulesPathParams, _super);
    function GetNetworkApplianceFirewallL3FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceFirewallL3FirewallRulesPathParams.prototype, "networkId", void 0);
    return GetNetworkApplianceFirewallL3FirewallRulesPathParams;
}(SpeakeasyBase));
export { GetNetworkApplianceFirewallL3FirewallRulesPathParams };
var GetNetworkApplianceFirewallL3FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceFirewallL3FirewallRulesRequest, _super);
    function GetNetworkApplianceFirewallL3FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkApplianceFirewallL3FirewallRulesPathParams)
    ], GetNetworkApplianceFirewallL3FirewallRulesRequest.prototype, "pathParams", void 0);
    return GetNetworkApplianceFirewallL3FirewallRulesRequest;
}(SpeakeasyBase));
export { GetNetworkApplianceFirewallL3FirewallRulesRequest };
var GetNetworkApplianceFirewallL3FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceFirewallL3FirewallRulesResponse, _super);
    function GetNetworkApplianceFirewallL3FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkApplianceFirewallL3FirewallRulesResponse.prototype, "getNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject", void 0);
    return GetNetworkApplianceFirewallL3FirewallRulesResponse;
}(SpeakeasyBase));
export { GetNetworkApplianceFirewallL3FirewallRulesResponse };
