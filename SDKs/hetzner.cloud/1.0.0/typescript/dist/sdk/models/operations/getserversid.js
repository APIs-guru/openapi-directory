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
var GetServersIdPathParams = /** @class */ (function (_super) {
    __extends(GetServersIdPathParams, _super);
    function GetServersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdPathParams.prototype, "id", void 0);
    return GetServersIdPathParams;
}(SpeakeasyBase));
export { GetServersIdPathParams };
var GetServersId200ApplicationJsonServerDatacenterLocation = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerDatacenterLocation, _super);
    function GetServersId200ApplicationJsonServerDatacenterLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenterLocation.prototype, "networkZone", void 0);
    return GetServersId200ApplicationJsonServerDatacenterLocation;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerDatacenterLocation };
// GetServersId200ApplicationJsonServerDatacenterServerTypes
/**
 * The Server types the Datacenter can handle
**/
var GetServersId200ApplicationJsonServerDatacenterServerTypes = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerDatacenterServerTypes, _super);
    function GetServersId200ApplicationJsonServerDatacenterServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "supported", void 0);
    return GetServersId200ApplicationJsonServerDatacenterServerTypes;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerDatacenterServerTypes };
// GetServersId200ApplicationJsonServerDatacenter
/**
 * Datacenter this Resource is located at
**/
var GetServersId200ApplicationJsonServerDatacenter = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerDatacenter, _super);
    function GetServersId200ApplicationJsonServerDatacenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerDatacenter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerDatacenterLocation)
    ], GetServersId200ApplicationJsonServerDatacenter.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerDatacenter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerDatacenterServerTypes)
    ], GetServersId200ApplicationJsonServerDatacenter.prototype, "serverTypes", void 0);
    return GetServersId200ApplicationJsonServerDatacenter;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerDatacenter };
// GetServersId200ApplicationJsonServerImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var GetServersId200ApplicationJsonServerImageCreatedFrom = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerImageCreatedFrom, _super);
    function GetServersId200ApplicationJsonServerImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImageCreatedFrom.prototype, "name", void 0);
    return GetServersId200ApplicationJsonServerImageCreatedFrom;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerImageCreatedFrom };
export var GetServersId200ApplicationJsonServerImageOsFlavorEnum;
(function (GetServersId200ApplicationJsonServerImageOsFlavorEnum) {
    GetServersId200ApplicationJsonServerImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    GetServersId200ApplicationJsonServerImageOsFlavorEnum["Centos"] = "centos";
    GetServersId200ApplicationJsonServerImageOsFlavorEnum["Debian"] = "debian";
    GetServersId200ApplicationJsonServerImageOsFlavorEnum["Fedora"] = "fedora";
    GetServersId200ApplicationJsonServerImageOsFlavorEnum["Unknown"] = "unknown";
})(GetServersId200ApplicationJsonServerImageOsFlavorEnum || (GetServersId200ApplicationJsonServerImageOsFlavorEnum = {}));
// GetServersId200ApplicationJsonServerImageProtection
/**
 * Protection configuration for the Resource
**/
var GetServersId200ApplicationJsonServerImageProtection = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerImageProtection, _super);
    function GetServersId200ApplicationJsonServerImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerImageProtection.prototype, "delete", void 0);
    return GetServersId200ApplicationJsonServerImageProtection;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerImageProtection };
export var GetServersId200ApplicationJsonServerImageStatusEnum;
(function (GetServersId200ApplicationJsonServerImageStatusEnum) {
    GetServersId200ApplicationJsonServerImageStatusEnum["Available"] = "available";
    GetServersId200ApplicationJsonServerImageStatusEnum["Creating"] = "creating";
    GetServersId200ApplicationJsonServerImageStatusEnum["Unavailable"] = "unavailable";
})(GetServersId200ApplicationJsonServerImageStatusEnum || (GetServersId200ApplicationJsonServerImageStatusEnum = {}));
export var GetServersId200ApplicationJsonServerImageTypeEnum;
(function (GetServersId200ApplicationJsonServerImageTypeEnum) {
    GetServersId200ApplicationJsonServerImageTypeEnum["System"] = "system";
    GetServersId200ApplicationJsonServerImageTypeEnum["App"] = "app";
    GetServersId200ApplicationJsonServerImageTypeEnum["Snapshot"] = "snapshot";
    GetServersId200ApplicationJsonServerImageTypeEnum["Backup"] = "backup";
    GetServersId200ApplicationJsonServerImageTypeEnum["Temporary"] = "temporary";
})(GetServersId200ApplicationJsonServerImageTypeEnum || (GetServersId200ApplicationJsonServerImageTypeEnum = {}));
var GetServersId200ApplicationJsonServerImage = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerImage, _super);
    function GetServersId200ApplicationJsonServerImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerImageCreatedFrom)
    ], GetServersId200ApplicationJsonServerImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServersId200ApplicationJsonServerImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerImageProtection)
    ], GetServersId200ApplicationJsonServerImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerImage.prototype, "type", void 0);
    return GetServersId200ApplicationJsonServerImage;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerImage };
export var GetServersId200ApplicationJsonServerIsoTypeEnum;
(function (GetServersId200ApplicationJsonServerIsoTypeEnum) {
    GetServersId200ApplicationJsonServerIsoTypeEnum["Public"] = "public";
    GetServersId200ApplicationJsonServerIsoTypeEnum["Private"] = "private";
})(GetServersId200ApplicationJsonServerIsoTypeEnum || (GetServersId200ApplicationJsonServerIsoTypeEnum = {}));
// GetServersId200ApplicationJsonServerIso
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
var GetServersId200ApplicationJsonServerIso = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerIso, _super);
    function GetServersId200ApplicationJsonServerIso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerIso.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerIso.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerIso.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerIso.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerIso.prototype, "type", void 0);
    return GetServersId200ApplicationJsonServerIso;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerIso };
export var GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
(function (GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum) {
    GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum["Spread"] = "spread";
})(GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum || (GetServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum = {}));
var GetServersId200ApplicationJsonServerPlacementGroupNullable = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPlacementGroupNullable, _super);
    function GetServersId200ApplicationJsonServerPlacementGroupNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "type", void 0);
    return GetServersId200ApplicationJsonServerPlacementGroupNullable;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPlacementGroupNullable };
var GetServersId200ApplicationJsonServerPrivateNet = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPrivateNet, _super);
    function GetServersId200ApplicationJsonServerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerPrivateNet.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPrivateNet.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerPrivateNet.prototype, "network", void 0);
    return GetServersId200ApplicationJsonServerPrivateNet;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPrivateNet };
// GetServersId200ApplicationJsonServerProtection
/**
 * Protection configuration for the Server
**/
var GetServersId200ApplicationJsonServerProtection = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerProtection, _super);
    function GetServersId200ApplicationJsonServerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerProtection.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebuild" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerProtection.prototype, "rebuild", void 0);
    return GetServersId200ApplicationJsonServerProtection;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerProtection };
export var GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
(function (GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum) {
    GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum["Applied"] = "applied";
    GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum["Pending"] = "pending";
})(GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum || (GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum = {}));
var GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall, _super);
    function GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall.prototype, "status", void 0);
    return GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall };
// GetServersId200ApplicationJsonServerPublicNetIpv4
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
var GetServersId200ApplicationJsonServerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPublicNetIpv4, _super);
    function GetServersId200ApplicationJsonServerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerPublicNetIpv4.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetIpv4.prototype, "ip", void 0);
    return GetServersId200ApplicationJsonServerPublicNetIpv4;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPublicNetIpv4 };
var GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr, _super);
    function GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr.prototype, "ip", void 0);
    return GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr };
// GetServersId200ApplicationJsonServerPublicNetIpv6
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
var GetServersId200ApplicationJsonServerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPublicNetIpv6, _super);
    function GetServersId200ApplicationJsonServerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerPublicNetIpv6.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetServersId200ApplicationJsonServerPublicNetIpv6DnsPtr }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerPublicNetIpv6.prototype, "ip", void 0);
    return GetServersId200ApplicationJsonServerPublicNetIpv6;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPublicNetIpv6 };
// GetServersId200ApplicationJsonServerPublicNet
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
var GetServersId200ApplicationJsonServerPublicNet = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerPublicNet, _super);
    function GetServersId200ApplicationJsonServerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewalls", elemType: GetServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerPublicNet.prototype, "firewalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerPublicNet.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerPublicNetIpv4)
    ], GetServersId200ApplicationJsonServerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerPublicNetIpv6)
    ], GetServersId200ApplicationJsonServerPublicNet.prototype, "ipv6", void 0);
    return GetServersId200ApplicationJsonServerPublicNet;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerPublicNet };
export var GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum;
(function (GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum) {
    GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum["Shared"] = "shared";
    GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum["Dedicated"] = "dedicated";
})(GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum || (GetServersId200ApplicationJsonServerServerTypeCpuTypeEnum = {}));
// GetServersId200ApplicationJsonServerServerTypePricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var GetServersId200ApplicationJsonServerServerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerServerTypePricesPriceHourly, _super);
    function GetServersId200ApplicationJsonServerServerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerTypePricesPriceHourly.prototype, "net", void 0);
    return GetServersId200ApplicationJsonServerServerTypePricesPriceHourly;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerServerTypePricesPriceHourly };
// GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly, _super);
    function GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly };
var GetServersId200ApplicationJsonServerServerTypePrices = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerServerTypePrices, _super);
    function GetServersId200ApplicationJsonServerServerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerServerTypePricesPriceHourly)
    ], GetServersId200ApplicationJsonServerServerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerServerTypePricesPriceMonthly)
    ], GetServersId200ApplicationJsonServerServerTypePrices.prototype, "priceMonthly", void 0);
    return GetServersId200ApplicationJsonServerServerTypePrices;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerServerTypePrices };
export var GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
(function (GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum) {
    GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum["Local"] = "local";
    GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum["Network"] = "network";
})(GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum || (GetServersId200ApplicationJsonServerServerTypeStorageTypeEnum = {}));
// GetServersId200ApplicationJsonServerServerType
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
var GetServersId200ApplicationJsonServerServerType = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServerServerType, _super);
    function GetServersId200ApplicationJsonServerServerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "cores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "cpuType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServersId200ApplicationJsonServerServerTypePrices }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServerServerType.prototype, "storageType", void 0);
    return GetServersId200ApplicationJsonServerServerType;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServerServerType };
export var GetServersId200ApplicationJsonServerStatusEnum;
(function (GetServersId200ApplicationJsonServerStatusEnum) {
    GetServersId200ApplicationJsonServerStatusEnum["Running"] = "running";
    GetServersId200ApplicationJsonServerStatusEnum["Initializing"] = "initializing";
    GetServersId200ApplicationJsonServerStatusEnum["Starting"] = "starting";
    GetServersId200ApplicationJsonServerStatusEnum["Stopping"] = "stopping";
    GetServersId200ApplicationJsonServerStatusEnum["Off"] = "off";
    GetServersId200ApplicationJsonServerStatusEnum["Deleting"] = "deleting";
    GetServersId200ApplicationJsonServerStatusEnum["Migrating"] = "migrating";
    GetServersId200ApplicationJsonServerStatusEnum["Rebuilding"] = "rebuilding";
    GetServersId200ApplicationJsonServerStatusEnum["Unknown"] = "unknown";
})(GetServersId200ApplicationJsonServerStatusEnum || (GetServersId200ApplicationJsonServerStatusEnum = {}));
var GetServersId200ApplicationJsonServer = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJsonServer, _super);
    function GetServersId200ApplicationJsonServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup_window" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServer.prototype, "backupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerDatacenter)
    ], GetServersId200ApplicationJsonServer.prototype, "datacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerImage)
    ], GetServersId200ApplicationJsonServer.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerIso)
    ], GetServersId200ApplicationJsonServer.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServersId200ApplicationJsonServer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServer.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServer.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerPlacementGroupNullable)
    ], GetServersId200ApplicationJsonServer.prototype, "placementGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_disk_size" }),
        __metadata("design:type", Number)
    ], GetServersId200ApplicationJsonServer.prototype, "primaryDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetServersId200ApplicationJsonServerPrivateNet }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerProtection)
    ], GetServersId200ApplicationJsonServer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerPublicNet)
    ], GetServersId200ApplicationJsonServer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rescue_enabled" }),
        __metadata("design:type", Boolean)
    ], GetServersId200ApplicationJsonServer.prototype, "rescueEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", GetServersId200ApplicationJsonServerServerType)
    ], GetServersId200ApplicationJsonServer.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServersId200ApplicationJsonServer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], GetServersId200ApplicationJsonServer.prototype, "volumes", void 0);
    return GetServersId200ApplicationJsonServer;
}(SpeakeasyBase));
export { GetServersId200ApplicationJsonServer };
var GetServersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServersId200ApplicationJson, _super);
    function GetServersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetServersId200ApplicationJsonServer)
    ], GetServersId200ApplicationJson.prototype, "server", void 0);
    return GetServersId200ApplicationJson;
}(SpeakeasyBase));
export { GetServersId200ApplicationJson };
var GetServersIdRequest = /** @class */ (function (_super) {
    __extends(GetServersIdRequest, _super);
    function GetServersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdPathParams)
    ], GetServersIdRequest.prototype, "pathParams", void 0);
    return GetServersIdRequest;
}(SpeakeasyBase));
export { GetServersIdRequest };
var GetServersIdResponse = /** @class */ (function (_super) {
    __extends(GetServersIdResponse, _super);
    function GetServersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersId200ApplicationJson)
    ], GetServersIdResponse.prototype, "getServersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServersIdResponse.prototype, "statusCode", void 0);
    return GetServersIdResponse;
}(SpeakeasyBase));
export { GetServersIdResponse };
