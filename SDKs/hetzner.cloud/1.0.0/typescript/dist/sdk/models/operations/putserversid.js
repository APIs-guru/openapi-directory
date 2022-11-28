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
var PutServersIdPathParams = /** @class */ (function (_super) {
    __extends(PutServersIdPathParams, _super);
    function PutServersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutServersIdPathParams.prototype, "id", void 0);
    return PutServersIdPathParams;
}(SpeakeasyBase));
export { PutServersIdPathParams };
var PutServersIdUpdateServerRequest = /** @class */ (function (_super) {
    __extends(PutServersIdUpdateServerRequest, _super);
    function PutServersIdUpdateServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutServersIdUpdateServerRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersIdUpdateServerRequest.prototype, "name", void 0);
    return PutServersIdUpdateServerRequest;
}(SpeakeasyBase));
export { PutServersIdUpdateServerRequest };
var PutServersId200ApplicationJsonServerDatacenterLocation = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerDatacenterLocation, _super);
    function PutServersId200ApplicationJsonServerDatacenterLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenterLocation.prototype, "networkZone", void 0);
    return PutServersId200ApplicationJsonServerDatacenterLocation;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerDatacenterLocation };
// PutServersId200ApplicationJsonServerDatacenterServerTypes
/**
 * The Server types the Datacenter can handle
**/
var PutServersId200ApplicationJsonServerDatacenterServerTypes = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerDatacenterServerTypes, _super);
    function PutServersId200ApplicationJsonServerDatacenterServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerDatacenterServerTypes.prototype, "supported", void 0);
    return PutServersId200ApplicationJsonServerDatacenterServerTypes;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerDatacenterServerTypes };
// PutServersId200ApplicationJsonServerDatacenter
/**
 * Datacenter this Resource is located at
**/
var PutServersId200ApplicationJsonServerDatacenter = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerDatacenter, _super);
    function PutServersId200ApplicationJsonServerDatacenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerDatacenter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerDatacenterLocation)
    ], PutServersId200ApplicationJsonServerDatacenter.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerDatacenter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerDatacenterServerTypes)
    ], PutServersId200ApplicationJsonServerDatacenter.prototype, "serverTypes", void 0);
    return PutServersId200ApplicationJsonServerDatacenter;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerDatacenter };
// PutServersId200ApplicationJsonServerImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var PutServersId200ApplicationJsonServerImageCreatedFrom = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerImageCreatedFrom, _super);
    function PutServersId200ApplicationJsonServerImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImageCreatedFrom.prototype, "name", void 0);
    return PutServersId200ApplicationJsonServerImageCreatedFrom;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerImageCreatedFrom };
export var PutServersId200ApplicationJsonServerImageOsFlavorEnum;
(function (PutServersId200ApplicationJsonServerImageOsFlavorEnum) {
    PutServersId200ApplicationJsonServerImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    PutServersId200ApplicationJsonServerImageOsFlavorEnum["Centos"] = "centos";
    PutServersId200ApplicationJsonServerImageOsFlavorEnum["Debian"] = "debian";
    PutServersId200ApplicationJsonServerImageOsFlavorEnum["Fedora"] = "fedora";
    PutServersId200ApplicationJsonServerImageOsFlavorEnum["Unknown"] = "unknown";
})(PutServersId200ApplicationJsonServerImageOsFlavorEnum || (PutServersId200ApplicationJsonServerImageOsFlavorEnum = {}));
// PutServersId200ApplicationJsonServerImageProtection
/**
 * Protection configuration for the Resource
**/
var PutServersId200ApplicationJsonServerImageProtection = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerImageProtection, _super);
    function PutServersId200ApplicationJsonServerImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerImageProtection.prototype, "delete", void 0);
    return PutServersId200ApplicationJsonServerImageProtection;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerImageProtection };
export var PutServersId200ApplicationJsonServerImageStatusEnum;
(function (PutServersId200ApplicationJsonServerImageStatusEnum) {
    PutServersId200ApplicationJsonServerImageStatusEnum["Available"] = "available";
    PutServersId200ApplicationJsonServerImageStatusEnum["Creating"] = "creating";
    PutServersId200ApplicationJsonServerImageStatusEnum["Unavailable"] = "unavailable";
})(PutServersId200ApplicationJsonServerImageStatusEnum || (PutServersId200ApplicationJsonServerImageStatusEnum = {}));
export var PutServersId200ApplicationJsonServerImageTypeEnum;
(function (PutServersId200ApplicationJsonServerImageTypeEnum) {
    PutServersId200ApplicationJsonServerImageTypeEnum["System"] = "system";
    PutServersId200ApplicationJsonServerImageTypeEnum["App"] = "app";
    PutServersId200ApplicationJsonServerImageTypeEnum["Snapshot"] = "snapshot";
    PutServersId200ApplicationJsonServerImageTypeEnum["Backup"] = "backup";
    PutServersId200ApplicationJsonServerImageTypeEnum["Temporary"] = "temporary";
})(PutServersId200ApplicationJsonServerImageTypeEnum || (PutServersId200ApplicationJsonServerImageTypeEnum = {}));
var PutServersId200ApplicationJsonServerImage = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerImage, _super);
    function PutServersId200ApplicationJsonServerImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerImageCreatedFrom)
    ], PutServersId200ApplicationJsonServerImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutServersId200ApplicationJsonServerImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerImageProtection)
    ], PutServersId200ApplicationJsonServerImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerImage.prototype, "type", void 0);
    return PutServersId200ApplicationJsonServerImage;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerImage };
export var PutServersId200ApplicationJsonServerIsoTypeEnum;
(function (PutServersId200ApplicationJsonServerIsoTypeEnum) {
    PutServersId200ApplicationJsonServerIsoTypeEnum["Public"] = "public";
    PutServersId200ApplicationJsonServerIsoTypeEnum["Private"] = "private";
})(PutServersId200ApplicationJsonServerIsoTypeEnum || (PutServersId200ApplicationJsonServerIsoTypeEnum = {}));
// PutServersId200ApplicationJsonServerIso
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
var PutServersId200ApplicationJsonServerIso = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerIso, _super);
    function PutServersId200ApplicationJsonServerIso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerIso.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerIso.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerIso.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerIso.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerIso.prototype, "type", void 0);
    return PutServersId200ApplicationJsonServerIso;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerIso };
export var PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum;
(function (PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum) {
    PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum["Spread"] = "spread";
})(PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum || (PutServersId200ApplicationJsonServerPlacementGroupNullableTypeEnum = {}));
var PutServersId200ApplicationJsonServerPlacementGroupNullable = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPlacementGroupNullable, _super);
    function PutServersId200ApplicationJsonServerPlacementGroupNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPlacementGroupNullable.prototype, "type", void 0);
    return PutServersId200ApplicationJsonServerPlacementGroupNullable;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPlacementGroupNullable };
var PutServersId200ApplicationJsonServerPrivateNet = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPrivateNet, _super);
    function PutServersId200ApplicationJsonServerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerPrivateNet.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPrivateNet.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerPrivateNet.prototype, "network", void 0);
    return PutServersId200ApplicationJsonServerPrivateNet;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPrivateNet };
// PutServersId200ApplicationJsonServerProtection
/**
 * Protection configuration for the Server
**/
var PutServersId200ApplicationJsonServerProtection = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerProtection, _super);
    function PutServersId200ApplicationJsonServerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerProtection.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebuild" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerProtection.prototype, "rebuild", void 0);
    return PutServersId200ApplicationJsonServerProtection;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerProtection };
export var PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum;
(function (PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum) {
    PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum["Applied"] = "applied";
    PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum["Pending"] = "pending";
})(PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum || (PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewallStatusEnum = {}));
var PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall, _super);
    function PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall.prototype, "status", void 0);
    return PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall };
// PutServersId200ApplicationJsonServerPublicNetIpv4
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
var PutServersId200ApplicationJsonServerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPublicNetIpv4, _super);
    function PutServersId200ApplicationJsonServerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerPublicNetIpv4.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetIpv4.prototype, "ip", void 0);
    return PutServersId200ApplicationJsonServerPublicNetIpv4;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPublicNetIpv4 };
var PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr, _super);
    function PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr.prototype, "ip", void 0);
    return PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr };
// PutServersId200ApplicationJsonServerPublicNetIpv6
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
var PutServersId200ApplicationJsonServerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPublicNetIpv6, _super);
    function PutServersId200ApplicationJsonServerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerPublicNetIpv6.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PutServersId200ApplicationJsonServerPublicNetIpv6DnsPtr }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerPublicNetIpv6.prototype, "ip", void 0);
    return PutServersId200ApplicationJsonServerPublicNetIpv6;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPublicNetIpv6 };
// PutServersId200ApplicationJsonServerPublicNet
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
var PutServersId200ApplicationJsonServerPublicNet = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerPublicNet, _super);
    function PutServersId200ApplicationJsonServerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PutServersId200ApplicationJsonServerPublicNetServerPublicNetFirewall }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerPublicNet.prototype, "firewalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerPublicNet.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerPublicNetIpv4)
    ], PutServersId200ApplicationJsonServerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerPublicNetIpv6)
    ], PutServersId200ApplicationJsonServerPublicNet.prototype, "ipv6", void 0);
    return PutServersId200ApplicationJsonServerPublicNet;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerPublicNet };
export var PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum;
(function (PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum) {
    PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum["Shared"] = "shared";
    PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum["Dedicated"] = "dedicated";
})(PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum || (PutServersId200ApplicationJsonServerServerTypeCpuTypeEnum = {}));
// PutServersId200ApplicationJsonServerServerTypePricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var PutServersId200ApplicationJsonServerServerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerServerTypePricesPriceHourly, _super);
    function PutServersId200ApplicationJsonServerServerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerTypePricesPriceHourly.prototype, "net", void 0);
    return PutServersId200ApplicationJsonServerServerTypePricesPriceHourly;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerServerTypePricesPriceHourly };
// PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly, _super);
    function PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly.prototype, "net", void 0);
    return PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly };
var PutServersId200ApplicationJsonServerServerTypePrices = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerServerTypePrices, _super);
    function PutServersId200ApplicationJsonServerServerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerServerTypePricesPriceHourly)
    ], PutServersId200ApplicationJsonServerServerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerServerTypePricesPriceMonthly)
    ], PutServersId200ApplicationJsonServerServerTypePrices.prototype, "priceMonthly", void 0);
    return PutServersId200ApplicationJsonServerServerTypePrices;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerServerTypePrices };
export var PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum;
(function (PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum) {
    PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum["Local"] = "local";
    PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum["Network"] = "network";
})(PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum || (PutServersId200ApplicationJsonServerServerTypeStorageTypeEnum = {}));
// PutServersId200ApplicationJsonServerServerType
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
var PutServersId200ApplicationJsonServerServerType = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServerServerType, _super);
    function PutServersId200ApplicationJsonServerServerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "cores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "cpuType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: PutServersId200ApplicationJsonServerServerTypePrices }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServerServerType.prototype, "storageType", void 0);
    return PutServersId200ApplicationJsonServerServerType;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServerServerType };
export var PutServersId200ApplicationJsonServerStatusEnum;
(function (PutServersId200ApplicationJsonServerStatusEnum) {
    PutServersId200ApplicationJsonServerStatusEnum["Running"] = "running";
    PutServersId200ApplicationJsonServerStatusEnum["Initializing"] = "initializing";
    PutServersId200ApplicationJsonServerStatusEnum["Starting"] = "starting";
    PutServersId200ApplicationJsonServerStatusEnum["Stopping"] = "stopping";
    PutServersId200ApplicationJsonServerStatusEnum["Off"] = "off";
    PutServersId200ApplicationJsonServerStatusEnum["Deleting"] = "deleting";
    PutServersId200ApplicationJsonServerStatusEnum["Migrating"] = "migrating";
    PutServersId200ApplicationJsonServerStatusEnum["Rebuilding"] = "rebuilding";
    PutServersId200ApplicationJsonServerStatusEnum["Unknown"] = "unknown";
})(PutServersId200ApplicationJsonServerStatusEnum || (PutServersId200ApplicationJsonServerStatusEnum = {}));
var PutServersId200ApplicationJsonServer = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJsonServer, _super);
    function PutServersId200ApplicationJsonServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup_window" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServer.prototype, "backupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerDatacenter)
    ], PutServersId200ApplicationJsonServer.prototype, "datacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerImage)
    ], PutServersId200ApplicationJsonServer.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerIso)
    ], PutServersId200ApplicationJsonServer.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutServersId200ApplicationJsonServer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServer.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServer.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerPlacementGroupNullable)
    ], PutServersId200ApplicationJsonServer.prototype, "placementGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_disk_size" }),
        __metadata("design:type", Number)
    ], PutServersId200ApplicationJsonServer.prototype, "primaryDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: PutServersId200ApplicationJsonServerPrivateNet }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerProtection)
    ], PutServersId200ApplicationJsonServer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerPublicNet)
    ], PutServersId200ApplicationJsonServer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rescue_enabled" }),
        __metadata("design:type", Boolean)
    ], PutServersId200ApplicationJsonServer.prototype, "rescueEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", PutServersId200ApplicationJsonServerServerType)
    ], PutServersId200ApplicationJsonServer.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutServersId200ApplicationJsonServer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], PutServersId200ApplicationJsonServer.prototype, "volumes", void 0);
    return PutServersId200ApplicationJsonServer;
}(SpeakeasyBase));
export { PutServersId200ApplicationJsonServer };
var PutServersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutServersId200ApplicationJson, _super);
    function PutServersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PutServersId200ApplicationJsonServer)
    ], PutServersId200ApplicationJson.prototype, "server", void 0);
    return PutServersId200ApplicationJson;
}(SpeakeasyBase));
export { PutServersId200ApplicationJson };
var PutServersIdRequest = /** @class */ (function (_super) {
    __extends(PutServersIdRequest, _super);
    function PutServersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutServersIdPathParams)
    ], PutServersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutServersIdUpdateServerRequest)
    ], PutServersIdRequest.prototype, "request", void 0);
    return PutServersIdRequest;
}(SpeakeasyBase));
export { PutServersIdRequest };
var PutServersIdResponse = /** @class */ (function (_super) {
    __extends(PutServersIdResponse, _super);
    function PutServersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutServersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutServersId200ApplicationJson)
    ], PutServersIdResponse.prototype, "putServersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutServersIdResponse.prototype, "statusCode", void 0);
    return PutServersIdResponse;
}(SpeakeasyBase));
export { PutServersIdResponse };
