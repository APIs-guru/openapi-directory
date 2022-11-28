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
var UpdateNetworkGroupPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyPathParams, _super);
    function UpdateNetworkGroupPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupPolicyId" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyPathParams.prototype, "groupPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyPathParams.prototype, "networkId", void 0);
    return UpdateNetworkGroupPolicyPathParams;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyPathParams };
// UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits
/**
 * The bandwidth limits object, specifying upload and download speed for clients bound to the group policy. These are only enforced if 'settings' is set to 'custom'.
**/
var UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits, _super);
    function UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits };
export var UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["Ignore"] = "ignore";
    UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum["Custom"] = "custom";
})(UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyBandwidthSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyBandwidth
/**
 *     The bandwidth settings for clients bound to your group policy.
 *
**/
var UpdateNetworkGroupPolicyRequestBodyBandwidth = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyBandwidth, _super);
    function UpdateNetworkGroupPolicyRequestBodyBandwidth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyBandwidthBandwidthLimits)
    ], UpdateNetworkGroupPolicyRequestBodyBandwidth.prototype, "bandwidthLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyBandwidth.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyBandwidth;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyBandwidth };
export var UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum;
(function (UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum) {
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["AllServices"] = "All Services";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["AirPlay"] = "AirPlay";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Afp"] = "AFP";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["BitTorrent"] = "BitTorrent";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Ftp"] = "FTP";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["IChat"] = "iChat";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["ITunes"] = "iTunes";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Printers"] = "Printers";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Samba"] = "Samba";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Scanners"] = "Scanners";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum["Ssh"] = "SSH";
})(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum || (UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRulesServicesEnum = {}));
var UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules, _super);
    function UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules.prototype, "vlanId", void 0);
    return UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules };
export var UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["Ignore"] = "ignore";
    UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum["Custom"] = "custom";
})(UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyBonjourForwardingSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyBonjourForwarding
/**
 * The Bonjour settings for your group policy. Only valid if your network has a wireless configuration.
**/
var UpdateNetworkGroupPolicyRequestBodyBonjourForwarding = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyBonjourForwarding, _super);
    function UpdateNetworkGroupPolicyRequestBodyBonjourForwarding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkGroupPolicyRequestBodyBonjourForwardingRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyBonjourForwarding.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyBonjourForwarding.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyBonjourForwarding;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyBonjourForwarding };
export var UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["Append"] = "append";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum["Override"] = "override";
})(UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatternsSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns
/**
 * Settings for allowed URL patterns
**/
var UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns, _super);
    function UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns };
export var UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["Append"] = "append";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum["Override"] = "override";
})(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategoriesSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories
/**
 * Settings for blocked URL categories
**/
var UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories, _super);
    function UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories };
export var UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["Append"] = "append";
    UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum["Override"] = "override";
})(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatternsSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns
/**
 * Settings for blocked URL patterns
**/
var UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns, _super);
    function UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=patterns" }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns.prototype, "patterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns };
// UpdateNetworkGroupPolicyRequestBodyContentFiltering
/**
 * The content filtering settings for your group policy
**/
var UpdateNetworkGroupPolicyRequestBodyContentFiltering = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyContentFiltering, _super);
    function UpdateNetworkGroupPolicyRequestBodyContentFiltering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedUrlPatterns" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyContentFilteringAllowedUrlPatterns)
    ], UpdateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "allowedUrlPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedUrlCategories" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlCategories)
    ], UpdateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "blockedUrlCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedUrlPatterns" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyContentFilteringBlockedUrlPatterns)
    ], UpdateNetworkGroupPolicyRequestBodyContentFiltering.prototype, "blockedUrlPatterns", void 0);
    return UpdateNetworkGroupPolicyRequestBodyContentFiltering;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyContentFiltering };
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "destCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "destPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules.prototype, "protocol", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules };
export var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum;
(function (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum) {
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum || (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesPolicyEnum = {}));
export var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum;
(function (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum) {
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Application"] = "application";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Host"] = "host";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["Port"] = "port";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum["IpRange"] = "ipRange";
})(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum || (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRulesTypeEnum = {}));
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules.prototype, "value", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules };
export var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["Ignore"] = "ignore";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum["Custom"] = "custom";
})(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingSettingsEnum = {}));
export var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum;
(function (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum) {
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Application"] = "application";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Host"] = "host";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["Port"] = "port";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["IpRange"] = "ipRange";
    UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum["LocalNet"] = "localNet";
})(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum || (UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum = {}));
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions.prototype, "value", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions };
// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits };
// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimitsBandwidthLimits)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits.prototype, "bandwidthLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits.prototype, "settings", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits };
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitions", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitions }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "definitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dscpTagValue" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "dscpTagValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pcpTagValue" }),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "pcpTagValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesPerClientBandwidthLimits)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "perClientBandwidthLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules.prototype, "priority", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules };
// UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping
/**
 *     The firewall and traffic shaping rules and settings for your policy.
 *
**/
var UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping, _super);
    function UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l3FirewallRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL3FirewallRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "l3FirewallRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=l7FirewallRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingL7FirewallRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "l7FirewallRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficShapingRules", elemType: UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping.prototype, "trafficShapingRules", void 0);
    return UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping };
// UpdateNetworkGroupPolicyRequestBodySchedulingFriday
/**
 * The schedule object for Friday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingFriday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingFriday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingFriday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingFriday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingFriday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingFriday };
// UpdateNetworkGroupPolicyRequestBodySchedulingMonday
/**
 * The schedule object for Monday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingMonday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingMonday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingMonday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingMonday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingMonday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingMonday };
// UpdateNetworkGroupPolicyRequestBodySchedulingSaturday
/**
 * The schedule object for Saturday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingSaturday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingSaturday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingSaturday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSaturday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingSaturday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingSaturday };
// UpdateNetworkGroupPolicyRequestBodySchedulingSunday
/**
 * The schedule object for Sunday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingSunday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingSunday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingSunday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingSunday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingSunday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingSunday };
// UpdateNetworkGroupPolicyRequestBodySchedulingThursday
/**
 * The schedule object for Thursday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingThursday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingThursday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingThursday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingThursday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingThursday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingThursday };
// UpdateNetworkGroupPolicyRequestBodySchedulingTuesday
/**
 * The schedule object for Tuesday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingTuesday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingTuesday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingTuesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingTuesday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingTuesday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingTuesday };
// UpdateNetworkGroupPolicyRequestBodySchedulingWednesday
/**
 * The schedule object for Wednesday.
**/
var UpdateNetworkGroupPolicyRequestBodySchedulingWednesday = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodySchedulingWednesday, _super);
    function UpdateNetworkGroupPolicyRequestBodySchedulingWednesday() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodySchedulingWednesday.prototype, "to", void 0);
    return UpdateNetworkGroupPolicyRequestBodySchedulingWednesday;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodySchedulingWednesday };
// UpdateNetworkGroupPolicyRequestBodyScheduling
/**
 *     The schedule for the group policy. Schedules are applied to days of the week.
 *
**/
var UpdateNetworkGroupPolicyRequestBodyScheduling = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyScheduling, _super);
    function UpdateNetworkGroupPolicyRequestBodyScheduling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingFriday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "friday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingMonday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "monday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saturday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingSaturday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "saturday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingSunday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "sunday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thursday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingThursday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "thursday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tuesday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingTuesday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "tuesday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wednesday" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodySchedulingWednesday)
    ], UpdateNetworkGroupPolicyRequestBodyScheduling.prototype, "wednesday", void 0);
    return UpdateNetworkGroupPolicyRequestBodyScheduling;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyScheduling };
export var UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum["Bypass"] = "bypass";
})(UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum || (UpdateNetworkGroupPolicyRequestBodySplashAuthSettingsEnum = {}));
export var UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum;
(function (UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum) {
    UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["NetworkDefault"] = "network default";
    UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["Ignore"] = "ignore";
    UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum["Custom"] = "custom";
})(UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum || (UpdateNetworkGroupPolicyRequestBodyVlanTaggingSettingsEnum = {}));
// UpdateNetworkGroupPolicyRequestBodyVlanTagging
/**
 * The VLAN tagging settings for your group policy. Only available if your network has a wireless configuration.
**/
var UpdateNetworkGroupPolicyRequestBodyVlanTagging = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBodyVlanTagging, _super);
    function UpdateNetworkGroupPolicyRequestBodyVlanTagging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyVlanTagging.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBodyVlanTagging.prototype, "vlanId", void 0);
    return UpdateNetworkGroupPolicyRequestBodyVlanTagging;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBodyVlanTagging };
var UpdateNetworkGroupPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequestBody, _super);
    function UpdateNetworkGroupPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidth" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyBandwidth)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "bandwidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bonjourForwarding" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyBonjourForwarding)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "bonjourForwarding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentFiltering" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyContentFiltering)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "contentFiltering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewallAndTrafficShaping" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyFirewallAndTrafficShaping)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "firewallAndTrafficShaping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduling" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyScheduling)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "scheduling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashAuthSettings" }),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "splashAuthSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanTagging" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBodyVlanTagging)
    ], UpdateNetworkGroupPolicyRequestBody.prototype, "vlanTagging", void 0);
    return UpdateNetworkGroupPolicyRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequestBody };
var UpdateNetworkGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyRequest, _super);
    function UpdateNetworkGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkGroupPolicyPathParams)
    ], UpdateNetworkGroupPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkGroupPolicyRequestBody)
    ], UpdateNetworkGroupPolicyRequest.prototype, "request", void 0);
    return UpdateNetworkGroupPolicyRequest;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyRequest };
var UpdateNetworkGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkGroupPolicyResponse, _super);
    function UpdateNetworkGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkGroupPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkGroupPolicyResponse.prototype, "updateNetworkGroupPolicy200ApplicationJsonObject", void 0);
    return UpdateNetworkGroupPolicyResponse;
}(SpeakeasyBase));
export { UpdateNetworkGroupPolicyResponse };
