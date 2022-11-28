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
var GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams, _super);
    function GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams.prototype, "number", void 0);
    return GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams };
var GetNetworkWirelessSsidFirewallL7FirewallRulesRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, _super);
    function GetNetworkWirelessSsidFirewallL7FirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesRequest.prototype, "pathParams", void 0);
    return GetNetworkWirelessSsidFirewallL7FirewallRulesRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessSsidFirewallL7FirewallRulesRequest };
var GetNetworkWirelessSsidFirewallL7FirewallRulesResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSsidFirewallL7FirewallRulesResponse, _super);
    function GetNetworkWirelessSsidFirewallL7FirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessSsidFirewallL7FirewallRulesResponse.prototype, "getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject", void 0);
    return GetNetworkWirelessSsidFirewallL7FirewallRulesResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessSsidFirewallL7FirewallRulesResponse };
