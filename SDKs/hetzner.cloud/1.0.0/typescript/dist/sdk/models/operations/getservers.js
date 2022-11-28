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
export var GetServersSortEnum;
(function (GetServersSortEnum) {
    GetServersSortEnum["Id"] = "id";
    GetServersSortEnum["IdAsc"] = "id:asc";
    GetServersSortEnum["IdDesc"] = "id:desc";
    GetServersSortEnum["Name"] = "name";
    GetServersSortEnum["NameAsc"] = "name:asc";
    GetServersSortEnum["NameDesc"] = "name:desc";
    GetServersSortEnum["Created"] = "created";
    GetServersSortEnum["CreatedAsc"] = "created:asc";
    GetServersSortEnum["CreatedDesc"] = "created:desc";
})(GetServersSortEnum || (GetServersSortEnum = {}));
export var GetServersStatusEnum;
(function (GetServersStatusEnum) {
    GetServersStatusEnum["Initializing"] = "initializing";
    GetServersStatusEnum["Starting"] = "starting";
    GetServersStatusEnum["Running"] = "running";
    GetServersStatusEnum["Stopping"] = "stopping";
    GetServersStatusEnum["Off"] = "off";
    GetServersStatusEnum["Deleting"] = "deleting";
    GetServersStatusEnum["Rebuilding"] = "rebuilding";
    GetServersStatusEnum["Migrating"] = "migrating";
    GetServersStatusEnum["Unknown"] = "unknown";
})(GetServersStatusEnum || (GetServersStatusEnum = {}));
var GetServersQueryParams = /** @class */ (function (_super) {
    __extends(GetServersQueryParams, _super);
    function GetServersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetServersQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetServersQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetServersQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetServersQueryParams.prototype, "status", void 0);
    return GetServersQueryParams;
}(SpeakeasyBase));
export { GetServersQueryParams };
var GetServers200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonMetaPagination, _super);
    function GetServers200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetServers200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonMetaPagination };
var GetServers200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonMeta, _super);
    function GetServers200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetServers200ApplicationJsonMetaPagination)
    ], GetServers200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetServers200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonMeta };
var GetServers200ApplicationJsonServersDatacenterLocation = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersDatacenterLocation, _super);
    function GetServers200ApplicationJsonServersDatacenterLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenterLocation.prototype, "networkZone", void 0);
    return GetServers200ApplicationJsonServersDatacenterLocation;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersDatacenterLocation };
// GetServers200ApplicationJsonServersDatacenterServerTypes
/**
 * The Server types the Datacenter can handle
**/
var GetServers200ApplicationJsonServersDatacenterServerTypes = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersDatacenterServerTypes, _super);
    function GetServers200ApplicationJsonServersDatacenterServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersDatacenterServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersDatacenterServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersDatacenterServerTypes.prototype, "supported", void 0);
    return GetServers200ApplicationJsonServersDatacenterServerTypes;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersDatacenterServerTypes };
// GetServers200ApplicationJsonServersDatacenter
/**
 * Datacenter this Resource is located at
**/
var GetServers200ApplicationJsonServersDatacenter = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersDatacenter, _super);
    function GetServers200ApplicationJsonServersDatacenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersDatacenter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetServers200ApplicationJsonServersDatacenterLocation)
    ], GetServers200ApplicationJsonServersDatacenter.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersDatacenter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", GetServers200ApplicationJsonServersDatacenterServerTypes)
    ], GetServers200ApplicationJsonServersDatacenter.prototype, "serverTypes", void 0);
    return GetServers200ApplicationJsonServersDatacenter;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersDatacenter };
// GetServers200ApplicationJsonServersImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var GetServers200ApplicationJsonServersImageCreatedFrom = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersImageCreatedFrom, _super);
    function GetServers200ApplicationJsonServersImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImageCreatedFrom.prototype, "name", void 0);
    return GetServers200ApplicationJsonServersImageCreatedFrom;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersImageCreatedFrom };
export var GetServers200ApplicationJsonServersImageOsFlavorEnum;
(function (GetServers200ApplicationJsonServersImageOsFlavorEnum) {
    GetServers200ApplicationJsonServersImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    GetServers200ApplicationJsonServersImageOsFlavorEnum["Centos"] = "centos";
    GetServers200ApplicationJsonServersImageOsFlavorEnum["Debian"] = "debian";
    GetServers200ApplicationJsonServersImageOsFlavorEnum["Fedora"] = "fedora";
    GetServers200ApplicationJsonServersImageOsFlavorEnum["Unknown"] = "unknown";
})(GetServers200ApplicationJsonServersImageOsFlavorEnum || (GetServers200ApplicationJsonServersImageOsFlavorEnum = {}));
// GetServers200ApplicationJsonServersImageProtection
/**
 * Protection configuration for the Resource
**/
var GetServers200ApplicationJsonServersImageProtection = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersImageProtection, _super);
    function GetServers200ApplicationJsonServersImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersImageProtection.prototype, "delete", void 0);
    return GetServers200ApplicationJsonServersImageProtection;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersImageProtection };
export var GetServers200ApplicationJsonServersImageStatusEnum;
(function (GetServers200ApplicationJsonServersImageStatusEnum) {
    GetServers200ApplicationJsonServersImageStatusEnum["Available"] = "available";
    GetServers200ApplicationJsonServersImageStatusEnum["Creating"] = "creating";
    GetServers200ApplicationJsonServersImageStatusEnum["Unavailable"] = "unavailable";
})(GetServers200ApplicationJsonServersImageStatusEnum || (GetServers200ApplicationJsonServersImageStatusEnum = {}));
export var GetServers200ApplicationJsonServersImageTypeEnum;
(function (GetServers200ApplicationJsonServersImageTypeEnum) {
    GetServers200ApplicationJsonServersImageTypeEnum["System"] = "system";
    GetServers200ApplicationJsonServersImageTypeEnum["App"] = "app";
    GetServers200ApplicationJsonServersImageTypeEnum["Snapshot"] = "snapshot";
    GetServers200ApplicationJsonServersImageTypeEnum["Backup"] = "backup";
    GetServers200ApplicationJsonServersImageTypeEnum["Temporary"] = "temporary";
})(GetServers200ApplicationJsonServersImageTypeEnum || (GetServers200ApplicationJsonServersImageTypeEnum = {}));
var GetServers200ApplicationJsonServersImage = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersImage, _super);
    function GetServers200ApplicationJsonServersImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", GetServers200ApplicationJsonServersImageCreatedFrom)
    ], GetServers200ApplicationJsonServersImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServers200ApplicationJsonServersImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetServers200ApplicationJsonServersImageProtection)
    ], GetServers200ApplicationJsonServersImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersImage.prototype, "type", void 0);
    return GetServers200ApplicationJsonServersImage;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersImage };
export var GetServers200ApplicationJsonServersIsoTypeEnum;
(function (GetServers200ApplicationJsonServersIsoTypeEnum) {
    GetServers200ApplicationJsonServersIsoTypeEnum["Public"] = "public";
    GetServers200ApplicationJsonServersIsoTypeEnum["Private"] = "private";
})(GetServers200ApplicationJsonServersIsoTypeEnum || (GetServers200ApplicationJsonServersIsoTypeEnum = {}));
// GetServers200ApplicationJsonServersIso
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
var GetServers200ApplicationJsonServersIso = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersIso, _super);
    function GetServers200ApplicationJsonServersIso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersIso.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersIso.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersIso.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersIso.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersIso.prototype, "type", void 0);
    return GetServers200ApplicationJsonServersIso;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersIso };
export var GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum;
(function (GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum) {
    GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum["Spread"] = "spread";
})(GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum || (GetServers200ApplicationJsonServersPlacementGroupNullableTypeEnum = {}));
var GetServers200ApplicationJsonServersPlacementGroupNullable = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPlacementGroupNullable, _super);
    function GetServers200ApplicationJsonServersPlacementGroupNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPlacementGroupNullable.prototype, "type", void 0);
    return GetServers200ApplicationJsonServersPlacementGroupNullable;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPlacementGroupNullable };
var GetServers200ApplicationJsonServersPrivateNet = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPrivateNet, _super);
    function GetServers200ApplicationJsonServersPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersPrivateNet.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPrivateNet.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersPrivateNet.prototype, "network", void 0);
    return GetServers200ApplicationJsonServersPrivateNet;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPrivateNet };
// GetServers200ApplicationJsonServersProtection
/**
 * Protection configuration for the Server
**/
var GetServers200ApplicationJsonServersProtection = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersProtection, _super);
    function GetServers200ApplicationJsonServersProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersProtection.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebuild" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersProtection.prototype, "rebuild", void 0);
    return GetServers200ApplicationJsonServersProtection;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersProtection };
export var GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum;
(function (GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum) {
    GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum["Applied"] = "applied";
    GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum["Pending"] = "pending";
})(GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum || (GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewallStatusEnum = {}));
var GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall, _super);
    function GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall.prototype, "status", void 0);
    return GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall };
// GetServers200ApplicationJsonServersPublicNetIpv4
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
var GetServers200ApplicationJsonServersPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPublicNetIpv4, _super);
    function GetServers200ApplicationJsonServersPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersPublicNetIpv4.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetIpv4.prototype, "ip", void 0);
    return GetServers200ApplicationJsonServersPublicNetIpv4;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPublicNetIpv4 };
var GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr, _super);
    function GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr.prototype, "ip", void 0);
    return GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr };
// GetServers200ApplicationJsonServersPublicNetIpv6
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
var GetServers200ApplicationJsonServersPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPublicNetIpv6, _super);
    function GetServers200ApplicationJsonServersPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersPublicNetIpv6.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetServers200ApplicationJsonServersPublicNetIpv6DnsPtr }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersPublicNetIpv6.prototype, "ip", void 0);
    return GetServers200ApplicationJsonServersPublicNetIpv6;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPublicNetIpv6 };
// GetServers200ApplicationJsonServersPublicNet
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
var GetServers200ApplicationJsonServersPublicNet = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersPublicNet, _super);
    function GetServers200ApplicationJsonServersPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewalls", elemType: GetServers200ApplicationJsonServersPublicNetServerPublicNetFirewall }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersPublicNet.prototype, "firewalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersPublicNet.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", GetServers200ApplicationJsonServersPublicNetIpv4)
    ], GetServers200ApplicationJsonServersPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", GetServers200ApplicationJsonServersPublicNetIpv6)
    ], GetServers200ApplicationJsonServersPublicNet.prototype, "ipv6", void 0);
    return GetServers200ApplicationJsonServersPublicNet;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersPublicNet };
export var GetServers200ApplicationJsonServersServerTypeCpuTypeEnum;
(function (GetServers200ApplicationJsonServersServerTypeCpuTypeEnum) {
    GetServers200ApplicationJsonServersServerTypeCpuTypeEnum["Shared"] = "shared";
    GetServers200ApplicationJsonServersServerTypeCpuTypeEnum["Dedicated"] = "dedicated";
})(GetServers200ApplicationJsonServersServerTypeCpuTypeEnum || (GetServers200ApplicationJsonServersServerTypeCpuTypeEnum = {}));
// GetServers200ApplicationJsonServersServerTypePricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var GetServers200ApplicationJsonServersServerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersServerTypePricesPriceHourly, _super);
    function GetServers200ApplicationJsonServersServerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerTypePricesPriceHourly.prototype, "net", void 0);
    return GetServers200ApplicationJsonServersServerTypePricesPriceHourly;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersServerTypePricesPriceHourly };
// GetServers200ApplicationJsonServersServerTypePricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var GetServers200ApplicationJsonServersServerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersServerTypePricesPriceMonthly, _super);
    function GetServers200ApplicationJsonServersServerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetServers200ApplicationJsonServersServerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersServerTypePricesPriceMonthly };
var GetServers200ApplicationJsonServersServerTypePrices = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersServerTypePrices, _super);
    function GetServers200ApplicationJsonServersServerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetServers200ApplicationJsonServersServerTypePricesPriceHourly)
    ], GetServers200ApplicationJsonServersServerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetServers200ApplicationJsonServersServerTypePricesPriceMonthly)
    ], GetServers200ApplicationJsonServersServerTypePrices.prototype, "priceMonthly", void 0);
    return GetServers200ApplicationJsonServersServerTypePrices;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersServerTypePrices };
export var GetServers200ApplicationJsonServersServerTypeStorageTypeEnum;
(function (GetServers200ApplicationJsonServersServerTypeStorageTypeEnum) {
    GetServers200ApplicationJsonServersServerTypeStorageTypeEnum["Local"] = "local";
    GetServers200ApplicationJsonServersServerTypeStorageTypeEnum["Network"] = "network";
})(GetServers200ApplicationJsonServersServerTypeStorageTypeEnum || (GetServers200ApplicationJsonServersServerTypeStorageTypeEnum = {}));
// GetServers200ApplicationJsonServersServerType
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
var GetServers200ApplicationJsonServersServerType = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServersServerType, _super);
    function GetServers200ApplicationJsonServersServerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersServerType.prototype, "cores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerType.prototype, "cpuType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServersServerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersServerType.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersServerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServersServerType.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetServers200ApplicationJsonServersServerTypePrices }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServersServerType.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServersServerType.prototype, "storageType", void 0);
    return GetServers200ApplicationJsonServersServerType;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServersServerType };
export var GetServers200ApplicationJsonServersStatusEnum;
(function (GetServers200ApplicationJsonServersStatusEnum) {
    GetServers200ApplicationJsonServersStatusEnum["Running"] = "running";
    GetServers200ApplicationJsonServersStatusEnum["Initializing"] = "initializing";
    GetServers200ApplicationJsonServersStatusEnum["Starting"] = "starting";
    GetServers200ApplicationJsonServersStatusEnum["Stopping"] = "stopping";
    GetServers200ApplicationJsonServersStatusEnum["Off"] = "off";
    GetServers200ApplicationJsonServersStatusEnum["Deleting"] = "deleting";
    GetServers200ApplicationJsonServersStatusEnum["Migrating"] = "migrating";
    GetServers200ApplicationJsonServersStatusEnum["Rebuilding"] = "rebuilding";
    GetServers200ApplicationJsonServersStatusEnum["Unknown"] = "unknown";
})(GetServers200ApplicationJsonServersStatusEnum || (GetServers200ApplicationJsonServersStatusEnum = {}));
var GetServers200ApplicationJsonServers = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJsonServers, _super);
    function GetServers200ApplicationJsonServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup_window" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServers.prototype, "backupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServers.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", GetServers200ApplicationJsonServersDatacenter)
    ], GetServers200ApplicationJsonServers.prototype, "datacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GetServers200ApplicationJsonServersImage)
    ], GetServers200ApplicationJsonServers.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServers.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServers.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", GetServers200ApplicationJsonServersIso)
    ], GetServers200ApplicationJsonServers.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetServers200ApplicationJsonServers.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServers.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServers.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServers.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", GetServers200ApplicationJsonServersPlacementGroupNullable)
    ], GetServers200ApplicationJsonServers.prototype, "placementGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_disk_size" }),
        __metadata("design:type", Number)
    ], GetServers200ApplicationJsonServers.prototype, "primaryDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetServers200ApplicationJsonServersPrivateNet }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServers.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetServers200ApplicationJsonServersProtection)
    ], GetServers200ApplicationJsonServers.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", GetServers200ApplicationJsonServersPublicNet)
    ], GetServers200ApplicationJsonServers.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rescue_enabled" }),
        __metadata("design:type", Boolean)
    ], GetServers200ApplicationJsonServers.prototype, "rescueEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", GetServers200ApplicationJsonServersServerType)
    ], GetServers200ApplicationJsonServers.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServers200ApplicationJsonServers.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJsonServers.prototype, "volumes", void 0);
    return GetServers200ApplicationJsonServers;
}(SpeakeasyBase));
export { GetServers200ApplicationJsonServers };
var GetServers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServers200ApplicationJson, _super);
    function GetServers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetServers200ApplicationJsonMeta)
    ], GetServers200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers", elemType: GetServers200ApplicationJsonServers }),
        __metadata("design:type", Array)
    ], GetServers200ApplicationJson.prototype, "servers", void 0);
    return GetServers200ApplicationJson;
}(SpeakeasyBase));
export { GetServers200ApplicationJson };
var GetServersRequest = /** @class */ (function (_super) {
    __extends(GetServersRequest, _super);
    function GetServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersQueryParams)
    ], GetServersRequest.prototype, "queryParams", void 0);
    return GetServersRequest;
}(SpeakeasyBase));
export { GetServersRequest };
var GetServersResponse = /** @class */ (function (_super) {
    __extends(GetServersResponse, _super);
    function GetServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServers200ApplicationJson)
    ], GetServersResponse.prototype, "getServers200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetServersResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServersResponse.prototype, "statusCode", void 0);
    return GetServersResponse;
}(SpeakeasyBase));
export { GetServersResponse };
