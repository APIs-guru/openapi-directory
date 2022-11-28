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
export var FirewallRuleConfigActionEnum;
(function (FirewallRuleConfigActionEnum) {
    FirewallRuleConfigActionEnum["Accept"] = "ACCEPT";
    FirewallRuleConfigActionEnum["Drop"] = "DROP";
})(FirewallRuleConfigActionEnum || (FirewallRuleConfigActionEnum = {}));
// FirewallRuleConfigAddresses
/**
 * Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
 *
**/
var FirewallRuleConfigAddresses = /** @class */ (function (_super) {
    __extends(FirewallRuleConfigAddresses, _super);
    function FirewallRuleConfigAddresses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", Array)
    ], FirewallRuleConfigAddresses.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", Array)
    ], FirewallRuleConfigAddresses.prototype, "ipv6", void 0);
    return FirewallRuleConfigAddresses;
}(SpeakeasyBase));
export { FirewallRuleConfigAddresses };
export var FirewallRuleConfigProtocolEnum;
(function (FirewallRuleConfigProtocolEnum) {
    FirewallRuleConfigProtocolEnum["Tcp"] = "TCP";
    FirewallRuleConfigProtocolEnum["Udp"] = "UDP";
    FirewallRuleConfigProtocolEnum["Icmp"] = "ICMP";
})(FirewallRuleConfigProtocolEnum || (FirewallRuleConfigProtocolEnum = {}));
// FirewallRuleConfig
/**
 * One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
 *
**/
var FirewallRuleConfig = /** @class */ (function (_super) {
    __extends(FirewallRuleConfig, _super);
    function FirewallRuleConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FirewallRuleConfig.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses" }),
        __metadata("design:type", FirewallRuleConfigAddresses)
    ], FirewallRuleConfig.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FirewallRuleConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FirewallRuleConfig.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports" }),
        __metadata("design:type", String)
    ], FirewallRuleConfig.prototype, "ports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], FirewallRuleConfig.prototype, "protocol", void 0);
    return FirewallRuleConfig;
}(SpeakeasyBase));
export { FirewallRuleConfig };
