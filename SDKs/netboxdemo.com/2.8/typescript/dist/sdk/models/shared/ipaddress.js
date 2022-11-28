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
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";
export var IpAddressFamilyLabelEnum;
(function (IpAddressFamilyLabelEnum) {
    IpAddressFamilyLabelEnum["IPv4"] = "IPv4";
    IpAddressFamilyLabelEnum["IPv6"] = "IPv6";
})(IpAddressFamilyLabelEnum || (IpAddressFamilyLabelEnum = {}));
var IpAddressFamily = /** @class */ (function (_super) {
    __extends(IpAddressFamily, _super);
    function IpAddressFamily() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], IpAddressFamily.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], IpAddressFamily.prototype, "value", void 0);
    return IpAddressFamily;
}(SpeakeasyBase));
export { IpAddressFamily };
export var IpAddressRoleLabelEnum;
(function (IpAddressRoleLabelEnum) {
    IpAddressRoleLabelEnum["Loopback"] = "Loopback";
    IpAddressRoleLabelEnum["Secondary"] = "Secondary";
    IpAddressRoleLabelEnum["Anycast"] = "Anycast";
    IpAddressRoleLabelEnum["Vip"] = "VIP";
    IpAddressRoleLabelEnum["Vrrp"] = "VRRP";
    IpAddressRoleLabelEnum["Hsrp"] = "HSRP";
    IpAddressRoleLabelEnum["Glbp"] = "GLBP";
    IpAddressRoleLabelEnum["Carp"] = "CARP";
})(IpAddressRoleLabelEnum || (IpAddressRoleLabelEnum = {}));
export var IpAddressRoleValueEnum;
(function (IpAddressRoleValueEnum) {
    IpAddressRoleValueEnum["Loopback"] = "loopback";
    IpAddressRoleValueEnum["Secondary"] = "secondary";
    IpAddressRoleValueEnum["Anycast"] = "anycast";
    IpAddressRoleValueEnum["Vip"] = "vip";
    IpAddressRoleValueEnum["Vrrp"] = "vrrp";
    IpAddressRoleValueEnum["Hsrp"] = "hsrp";
    IpAddressRoleValueEnum["Glbp"] = "glbp";
    IpAddressRoleValueEnum["Carp"] = "carp";
})(IpAddressRoleValueEnum || (IpAddressRoleValueEnum = {}));
var IpAddressRole = /** @class */ (function (_super) {
    __extends(IpAddressRole, _super);
    function IpAddressRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], IpAddressRole.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], IpAddressRole.prototype, "value", void 0);
    return IpAddressRole;
}(SpeakeasyBase));
export { IpAddressRole };
export var IpAddressStatusLabelEnum;
(function (IpAddressStatusLabelEnum) {
    IpAddressStatusLabelEnum["Active"] = "Active";
    IpAddressStatusLabelEnum["Reserved"] = "Reserved";
    IpAddressStatusLabelEnum["Deprecated"] = "Deprecated";
    IpAddressStatusLabelEnum["Dhcp"] = "DHCP";
})(IpAddressStatusLabelEnum || (IpAddressStatusLabelEnum = {}));
export var IpAddressStatusValueEnum;
(function (IpAddressStatusValueEnum) {
    IpAddressStatusValueEnum["Active"] = "active";
    IpAddressStatusValueEnum["Reserved"] = "reserved";
    IpAddressStatusValueEnum["Deprecated"] = "deprecated";
    IpAddressStatusValueEnum["Dhcp"] = "dhcp";
})(IpAddressStatusValueEnum || (IpAddressStatusValueEnum = {}));
var IpAddressStatus = /** @class */ (function (_super) {
    __extends(IpAddressStatus, _super);
    function IpAddressStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], IpAddressStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], IpAddressStatus.prototype, "value", void 0);
    return IpAddressStatus;
}(SpeakeasyBase));
export { IpAddressStatus };
var IpAddress = /** @class */ (function (_super) {
    __extends(IpAddress, _super);
    function IpAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], IpAddress.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], IpAddress.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_name" }),
        __metadata("design:type", String)
    ], IpAddress.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family" }),
        __metadata("design:type", IpAddressFamily)
    ], IpAddress.prototype, "family", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], IpAddress.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interface" }),
        __metadata("design:type", IpAddressInterface)
    ], IpAddress.prototype, "interface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], IpAddress.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nat_inside" }),
        __metadata("design:type", NestedIpAddress)
    ], IpAddress.prototype, "natInside", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nat_outside" }),
        __metadata("design:type", NestedIpAddress)
    ], IpAddress.prototype, "natOutside", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", IpAddressRole)
    ], IpAddress.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", IpAddressStatus)
    ], IpAddress.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], IpAddress.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", NestedTenant)
    ], IpAddress.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vrf" }),
        __metadata("design:type", NestedVrf)
    ], IpAddress.prototype, "vrf", void 0);
    return IpAddress;
}(SpeakeasyBase));
export { IpAddress };
