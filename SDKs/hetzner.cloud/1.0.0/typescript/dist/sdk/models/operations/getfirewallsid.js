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
var GetFirewallsIdPathParams = /** @class */ (function (_super) {
    __extends(GetFirewallsIdPathParams, _super);
    function GetFirewallsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdPathParams.prototype, "id", void 0);
    return GetFirewallsIdPathParams;
}(SpeakeasyBase));
export { GetFirewallsIdPathParams };
var GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer, _super);
    function GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer.prototype, "id", void 0);
    return GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer };
export var GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
(function (GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum) {
    GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum["Server"] = "server";
})(GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum || (GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum = {}));
var GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources, _super);
    function GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer)
    ], GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources.prototype, "type", void 0);
    return GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources };
var GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector, _super);
    function GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector.prototype, "selector", void 0);
    return GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector };
var GetFirewallsIdFirewallResponseFirewallAppliedToServer = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallAppliedToServer, _super);
    function GetFirewallsIdFirewallResponseFirewallAppliedToServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdFirewallResponseFirewallAppliedToServer.prototype, "id", void 0);
    return GetFirewallsIdFirewallResponseFirewallAppliedToServer;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallAppliedToServer };
export var GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
(function (GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum) {
    GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum["Server"] = "server";
    GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum["LabelSelector"] = "label_selector";
})(GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum || (GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum = {}));
var GetFirewallsIdFirewallResponseFirewallAppliedTo = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallAppliedTo, _super);
    function GetFirewallsIdFirewallResponseFirewallAppliedTo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_to_resources", elemType: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources }),
        __metadata("design:type", Array)
    ], GetFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "appliedToResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector)
    ], GetFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetFirewallsIdFirewallResponseFirewallAppliedToServer)
    ], GetFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallAppliedTo.prototype, "type", void 0);
    return GetFirewallsIdFirewallResponseFirewallAppliedTo;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallAppliedTo };
export var GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum;
(function (GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum) {
    GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum["In"] = "in";
    GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum["Out"] = "out";
})(GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum || (GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum = {}));
export var GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum;
(function (GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum) {
    GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Tcp"] = "tcp";
    GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Udp"] = "udp";
    GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Icmp"] = "icmp";
    GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Esp"] = "esp";
    GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum["Gre"] = "gre";
})(GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum || (GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum = {}));
var GetFirewallsIdFirewallResponseFirewallRule = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewallRule, _super);
    function GetFirewallsIdFirewallResponseFirewallRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_ips" }),
        __metadata("design:type", Array)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "destinationIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_ips" }),
        __metadata("design:type", Array)
    ], GetFirewallsIdFirewallResponseFirewallRule.prototype, "sourceIps", void 0);
    return GetFirewallsIdFirewallResponseFirewallRule;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewallRule };
var GetFirewallsIdFirewallResponseFirewall = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponseFirewall, _super);
    function GetFirewallsIdFirewallResponseFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applied_to", elemType: GetFirewallsIdFirewallResponseFirewallAppliedTo }),
        __metadata("design:type", Array)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "appliedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: GetFirewallsIdFirewallResponseFirewallRule }),
        __metadata("design:type", Array)
    ], GetFirewallsIdFirewallResponseFirewall.prototype, "rules", void 0);
    return GetFirewallsIdFirewallResponseFirewall;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponseFirewall };
var GetFirewallsIdFirewallResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdFirewallResponse, _super);
    function GetFirewallsIdFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewall" }),
        __metadata("design:type", GetFirewallsIdFirewallResponseFirewall)
    ], GetFirewallsIdFirewallResponse.prototype, "firewall", void 0);
    return GetFirewallsIdFirewallResponse;
}(SpeakeasyBase));
export { GetFirewallsIdFirewallResponse };
var GetFirewallsIdRequest = /** @class */ (function (_super) {
    __extends(GetFirewallsIdRequest, _super);
    function GetFirewallsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsIdPathParams)
    ], GetFirewallsIdRequest.prototype, "pathParams", void 0);
    return GetFirewallsIdRequest;
}(SpeakeasyBase));
export { GetFirewallsIdRequest };
var GetFirewallsIdResponse = /** @class */ (function (_super) {
    __extends(GetFirewallsIdResponse, _super);
    function GetFirewallsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallsIdFirewallResponse)
    ], GetFirewallsIdResponse.prototype, "firewallResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallsIdResponse.prototype, "statusCode", void 0);
    return GetFirewallsIdResponse;
}(SpeakeasyBase));
export { GetFirewallsIdResponse };
