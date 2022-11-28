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
var PostServersCreateServerRequestFirewalls = /** @class */ (function (_super) {
    __extends(PostServersCreateServerRequestFirewalls, _super);
    function PostServersCreateServerRequestFirewalls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewall" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerRequestFirewalls.prototype, "firewall", void 0);
    return PostServersCreateServerRequestFirewalls;
}(SpeakeasyBase));
export { PostServersCreateServerRequestFirewalls };
var PostServersCreateServerRequest = /** @class */ (function (_super) {
    __extends(PostServersCreateServerRequest, _super);
    function PostServersCreateServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automount" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerRequest.prototype, "automount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "datacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PostServersCreateServerRequestFirewalls }),
        __metadata("design:type", Array)
    ], PostServersCreateServerRequest.prototype, "firewalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostServersCreateServerRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerRequest.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_keys" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerRequest.prototype, "sshKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_after_create" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerRequest.prototype, "startAfterCreate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_data" }),
        __metadata("design:type", String)
    ], PostServersCreateServerRequest.prototype, "userData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerRequest.prototype, "volumes", void 0);
    return PostServersCreateServerRequest;
}(SpeakeasyBase));
export { PostServersCreateServerRequest };
// PostServersCreateServerResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersCreateServerResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseActionError, _super);
    function PostServersCreateServerResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseActionError.prototype, "message", void 0);
    return PostServersCreateServerResponseActionError;
}(SpeakeasyBase));
export { PostServersCreateServerResponseActionError };
var PostServersCreateServerResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseActionResources, _super);
    function PostServersCreateServerResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseActionResources.prototype, "type", void 0);
    return PostServersCreateServerResponseActionResources;
}(SpeakeasyBase));
export { PostServersCreateServerResponseActionResources };
export var PostServersCreateServerResponseActionStatusEnum;
(function (PostServersCreateServerResponseActionStatusEnum) {
    PostServersCreateServerResponseActionStatusEnum["Success"] = "success";
    PostServersCreateServerResponseActionStatusEnum["Running"] = "running";
    PostServersCreateServerResponseActionStatusEnum["Error"] = "error";
})(PostServersCreateServerResponseActionStatusEnum || (PostServersCreateServerResponseActionStatusEnum = {}));
var PostServersCreateServerResponseAction = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseAction, _super);
    function PostServersCreateServerResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersCreateServerResponseActionError)
    ], PostServersCreateServerResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersCreateServerResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseAction.prototype, "status", void 0);
    return PostServersCreateServerResponseAction;
}(SpeakeasyBase));
export { PostServersCreateServerResponseAction };
var PostServersCreateServerResponseServerDatacenterLocation = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerDatacenterLocation, _super);
    function PostServersCreateServerResponseServerDatacenterLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenterLocation.prototype, "networkZone", void 0);
    return PostServersCreateServerResponseServerDatacenterLocation;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerDatacenterLocation };
// PostServersCreateServerResponseServerDatacenterServerTypes
/**
 * The Server types the Datacenter can handle
**/
var PostServersCreateServerResponseServerDatacenterServerTypes = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerDatacenterServerTypes, _super);
    function PostServersCreateServerResponseServerDatacenterServerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerDatacenterServerTypes.prototype, "available", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_for_migration" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerDatacenterServerTypes.prototype, "availableForMigration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supported" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerDatacenterServerTypes.prototype, "supported", void 0);
    return PostServersCreateServerResponseServerDatacenterServerTypes;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerDatacenterServerTypes };
// PostServersCreateServerResponseServerDatacenter
/**
 * Datacenter this Resource is located at
**/
var PostServersCreateServerResponseServerDatacenter = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerDatacenter, _super);
    function PostServersCreateServerResponseServerDatacenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenter.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerDatacenter.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PostServersCreateServerResponseServerDatacenterLocation)
    ], PostServersCreateServerResponseServerDatacenter.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerDatacenter.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_types" }),
        __metadata("design:type", PostServersCreateServerResponseServerDatacenterServerTypes)
    ], PostServersCreateServerResponseServerDatacenter.prototype, "serverTypes", void 0);
    return PostServersCreateServerResponseServerDatacenter;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerDatacenter };
// PostServersCreateServerResponseServerImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var PostServersCreateServerResponseServerImageCreatedFrom = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerImageCreatedFrom, _super);
    function PostServersCreateServerResponseServerImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImageCreatedFrom.prototype, "name", void 0);
    return PostServersCreateServerResponseServerImageCreatedFrom;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerImageCreatedFrom };
export var PostServersCreateServerResponseServerImageOsFlavorEnum;
(function (PostServersCreateServerResponseServerImageOsFlavorEnum) {
    PostServersCreateServerResponseServerImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    PostServersCreateServerResponseServerImageOsFlavorEnum["Centos"] = "centos";
    PostServersCreateServerResponseServerImageOsFlavorEnum["Debian"] = "debian";
    PostServersCreateServerResponseServerImageOsFlavorEnum["Fedora"] = "fedora";
    PostServersCreateServerResponseServerImageOsFlavorEnum["Unknown"] = "unknown";
})(PostServersCreateServerResponseServerImageOsFlavorEnum || (PostServersCreateServerResponseServerImageOsFlavorEnum = {}));
// PostServersCreateServerResponseServerImageProtection
/**
 * Protection configuration for the Resource
**/
var PostServersCreateServerResponseServerImageProtection = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerImageProtection, _super);
    function PostServersCreateServerResponseServerImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerImageProtection.prototype, "delete", void 0);
    return PostServersCreateServerResponseServerImageProtection;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerImageProtection };
export var PostServersCreateServerResponseServerImageStatusEnum;
(function (PostServersCreateServerResponseServerImageStatusEnum) {
    PostServersCreateServerResponseServerImageStatusEnum["Available"] = "available";
    PostServersCreateServerResponseServerImageStatusEnum["Creating"] = "creating";
    PostServersCreateServerResponseServerImageStatusEnum["Unavailable"] = "unavailable";
})(PostServersCreateServerResponseServerImageStatusEnum || (PostServersCreateServerResponseServerImageStatusEnum = {}));
export var PostServersCreateServerResponseServerImageTypeEnum;
(function (PostServersCreateServerResponseServerImageTypeEnum) {
    PostServersCreateServerResponseServerImageTypeEnum["System"] = "system";
    PostServersCreateServerResponseServerImageTypeEnum["App"] = "app";
    PostServersCreateServerResponseServerImageTypeEnum["Snapshot"] = "snapshot";
    PostServersCreateServerResponseServerImageTypeEnum["Backup"] = "backup";
    PostServersCreateServerResponseServerImageTypeEnum["Temporary"] = "temporary";
})(PostServersCreateServerResponseServerImageTypeEnum || (PostServersCreateServerResponseServerImageTypeEnum = {}));
var PostServersCreateServerResponseServerImage = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerImage, _super);
    function PostServersCreateServerResponseServerImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", PostServersCreateServerResponseServerImageCreatedFrom)
    ], PostServersCreateServerResponseServerImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostServersCreateServerResponseServerImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostServersCreateServerResponseServerImageProtection)
    ], PostServersCreateServerResponseServerImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerImage.prototype, "type", void 0);
    return PostServersCreateServerResponseServerImage;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerImage };
export var PostServersCreateServerResponseServerIsoTypeEnum;
(function (PostServersCreateServerResponseServerIsoTypeEnum) {
    PostServersCreateServerResponseServerIsoTypeEnum["Public"] = "public";
    PostServersCreateServerResponseServerIsoTypeEnum["Private"] = "private";
})(PostServersCreateServerResponseServerIsoTypeEnum || (PostServersCreateServerResponseServerIsoTypeEnum = {}));
// PostServersCreateServerResponseServerIso
/**
 * ISO Image that is attached to this Server. Null if no ISO is attached.
**/
var PostServersCreateServerResponseServerIso = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerIso, _super);
    function PostServersCreateServerResponseServerIso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerIso.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerIso.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerIso.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerIso.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerIso.prototype, "type", void 0);
    return PostServersCreateServerResponseServerIso;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerIso };
export var PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum;
(function (PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum) {
    PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum["Spread"] = "spread";
})(PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum || (PostServersCreateServerResponseServerPlacementGroupNullableTypeEnum = {}));
var PostServersCreateServerResponseServerPlacementGroupNullable = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPlacementGroupNullable, _super);
    function PostServersCreateServerResponseServerPlacementGroupNullable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPlacementGroupNullable.prototype, "type", void 0);
    return PostServersCreateServerResponseServerPlacementGroupNullable;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPlacementGroupNullable };
var PostServersCreateServerResponseServerPrivateNet = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPrivateNet, _super);
    function PostServersCreateServerResponseServerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias_ips" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerPrivateNet.prototype, "aliasIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPrivateNet.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerPrivateNet.prototype, "network", void 0);
    return PostServersCreateServerResponseServerPrivateNet;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPrivateNet };
// PostServersCreateServerResponseServerProtection
/**
 * Protection configuration for the Server
**/
var PostServersCreateServerResponseServerProtection = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerProtection, _super);
    function PostServersCreateServerResponseServerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerProtection.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebuild" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerProtection.prototype, "rebuild", void 0);
    return PostServersCreateServerResponseServerProtection;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerProtection };
export var PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum;
(function (PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum) {
    PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum["Applied"] = "applied";
    PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum["Pending"] = "pending";
})(PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum || (PostServersCreateServerResponseServerPublicNetServerPublicNetFirewallStatusEnum = {}));
var PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall, _super);
    function PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall.prototype, "status", void 0);
    return PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall };
// PostServersCreateServerResponseServerPublicNetIpv4
/**
 * IP address (v4) and its reverse DNS entry of this Server
**/
var PostServersCreateServerResponseServerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPublicNetIpv4, _super);
    function PostServersCreateServerResponseServerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerPublicNetIpv4.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetIpv4.prototype, "ip", void 0);
    return PostServersCreateServerResponseServerPublicNetIpv4;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPublicNetIpv4 };
var PostServersCreateServerResponseServerPublicNetIpv6DnsPtr = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPublicNetIpv6DnsPtr, _super);
    function PostServersCreateServerResponseServerPublicNetIpv6DnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetIpv6DnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetIpv6DnsPtr.prototype, "ip", void 0);
    return PostServersCreateServerResponseServerPublicNetIpv6DnsPtr;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPublicNetIpv6DnsPtr };
// PostServersCreateServerResponseServerPublicNetIpv6
/**
 * IPv6 network assigned to this Server and its reverse DNS entry
**/
var PostServersCreateServerResponseServerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPublicNetIpv6, _super);
    function PostServersCreateServerResponseServerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerPublicNetIpv6.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PostServersCreateServerResponseServerPublicNetIpv6DnsPtr }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerPublicNetIpv6.prototype, "ip", void 0);
    return PostServersCreateServerResponseServerPublicNetIpv6;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPublicNetIpv6 };
// PostServersCreateServerResponseServerPublicNet
/**
 * Public network information. The Server's IPv4 address can be found in `public_net->ipv4->ip`
**/
var PostServersCreateServerResponseServerPublicNet = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerPublicNet, _super);
    function PostServersCreateServerResponseServerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewalls", elemType: PostServersCreateServerResponseServerPublicNetServerPublicNetFirewall }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerPublicNet.prototype, "firewalls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerPublicNet.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", PostServersCreateServerResponseServerPublicNetIpv4)
    ], PostServersCreateServerResponseServerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", PostServersCreateServerResponseServerPublicNetIpv6)
    ], PostServersCreateServerResponseServerPublicNet.prototype, "ipv6", void 0);
    return PostServersCreateServerResponseServerPublicNet;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerPublicNet };
export var PostServersCreateServerResponseServerServerTypeCpuTypeEnum;
(function (PostServersCreateServerResponseServerServerTypeCpuTypeEnum) {
    PostServersCreateServerResponseServerServerTypeCpuTypeEnum["Shared"] = "shared";
    PostServersCreateServerResponseServerServerTypeCpuTypeEnum["Dedicated"] = "dedicated";
})(PostServersCreateServerResponseServerServerTypeCpuTypeEnum || (PostServersCreateServerResponseServerServerTypeCpuTypeEnum = {}));
// PostServersCreateServerResponseServerServerTypePricesPriceHourly
/**
 * Hourly costs for a Server type in this Location
**/
var PostServersCreateServerResponseServerServerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerServerTypePricesPriceHourly, _super);
    function PostServersCreateServerResponseServerServerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerTypePricesPriceHourly.prototype, "net", void 0);
    return PostServersCreateServerResponseServerServerTypePricesPriceHourly;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerServerTypePricesPriceHourly };
// PostServersCreateServerResponseServerServerTypePricesPriceMonthly
/**
 * Monthly costs for a Server type in this Location
**/
var PostServersCreateServerResponseServerServerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerServerTypePricesPriceMonthly, _super);
    function PostServersCreateServerResponseServerServerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerTypePricesPriceMonthly.prototype, "net", void 0);
    return PostServersCreateServerResponseServerServerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerServerTypePricesPriceMonthly };
var PostServersCreateServerResponseServerServerTypePrices = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerServerTypePrices, _super);
    function PostServersCreateServerResponseServerServerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", PostServersCreateServerResponseServerServerTypePricesPriceHourly)
    ], PostServersCreateServerResponseServerServerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", PostServersCreateServerResponseServerServerTypePricesPriceMonthly)
    ], PostServersCreateServerResponseServerServerTypePrices.prototype, "priceMonthly", void 0);
    return PostServersCreateServerResponseServerServerTypePrices;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerServerTypePrices };
export var PostServersCreateServerResponseServerServerTypeStorageTypeEnum;
(function (PostServersCreateServerResponseServerServerTypeStorageTypeEnum) {
    PostServersCreateServerResponseServerServerTypeStorageTypeEnum["Local"] = "local";
    PostServersCreateServerResponseServerServerTypeStorageTypeEnum["Network"] = "network";
})(PostServersCreateServerResponseServerServerTypeStorageTypeEnum || (PostServersCreateServerResponseServerServerTypeStorageTypeEnum = {}));
// PostServersCreateServerResponseServerServerType
/**
 * Type of Server - determines how much ram, disk and cpu a Server has
**/
var PostServersCreateServerResponseServerServerType = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServerServerType, _super);
    function PostServersCreateServerResponseServerServerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cores" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerServerType.prototype, "cores", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpu_type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerType.prototype, "cpuType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServerServerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerServerType.prototype, "disk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerServerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServerServerType.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: PostServersCreateServerResponseServerServerTypePrices }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServerServerType.prototype, "prices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage_type" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServerServerType.prototype, "storageType", void 0);
    return PostServersCreateServerResponseServerServerType;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServerServerType };
export var PostServersCreateServerResponseServerStatusEnum;
(function (PostServersCreateServerResponseServerStatusEnum) {
    PostServersCreateServerResponseServerStatusEnum["Running"] = "running";
    PostServersCreateServerResponseServerStatusEnum["Initializing"] = "initializing";
    PostServersCreateServerResponseServerStatusEnum["Starting"] = "starting";
    PostServersCreateServerResponseServerStatusEnum["Stopping"] = "stopping";
    PostServersCreateServerResponseServerStatusEnum["Off"] = "off";
    PostServersCreateServerResponseServerStatusEnum["Deleting"] = "deleting";
    PostServersCreateServerResponseServerStatusEnum["Migrating"] = "migrating";
    PostServersCreateServerResponseServerStatusEnum["Rebuilding"] = "rebuilding";
    PostServersCreateServerResponseServerStatusEnum["Unknown"] = "unknown";
})(PostServersCreateServerResponseServerStatusEnum || (PostServersCreateServerResponseServerStatusEnum = {}));
var PostServersCreateServerResponseServer = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponseServer, _super);
    function PostServersCreateServerResponseServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup_window" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServer.prototype, "backupWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datacenter" }),
        __metadata("design:type", PostServersCreateServerResponseServerDatacenter)
    ], PostServersCreateServerResponseServer.prototype, "datacenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", PostServersCreateServerResponseServerImage)
    ], PostServersCreateServerResponseServer.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso" }),
        __metadata("design:type", PostServersCreateServerResponseServerIso)
    ], PostServersCreateServerResponseServer.prototype, "iso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostServersCreateServerResponseServer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServer.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServer.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", PostServersCreateServerResponseServerPlacementGroupNullable)
    ], PostServersCreateServerResponseServer.prototype, "placementGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_disk_size" }),
        __metadata("design:type", Number)
    ], PostServersCreateServerResponseServer.prototype, "primaryDiskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: PostServersCreateServerResponseServerPrivateNet }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostServersCreateServerResponseServerProtection)
    ], PostServersCreateServerResponseServer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", PostServersCreateServerResponseServerPublicNet)
    ], PostServersCreateServerResponseServer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rescue_enabled" }),
        __metadata("design:type", Boolean)
    ], PostServersCreateServerResponseServer.prototype, "rescueEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server_type" }),
        __metadata("design:type", PostServersCreateServerResponseServerServerType)
    ], PostServersCreateServerResponseServer.prototype, "serverType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponseServer.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes" }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponseServer.prototype, "volumes", void 0);
    return PostServersCreateServerResponseServer;
}(SpeakeasyBase));
export { PostServersCreateServerResponseServer };
var PostServersCreateServerResponse = /** @class */ (function (_super) {
    __extends(PostServersCreateServerResponse, _super);
    function PostServersCreateServerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersCreateServerResponseAction)
    ], PostServersCreateServerResponse.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_actions", elemType: PostServersCreateServerResponseAction }),
        __metadata("design:type", Array)
    ], PostServersCreateServerResponse.prototype, "nextActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_password" }),
        __metadata("design:type", String)
    ], PostServersCreateServerResponse.prototype, "rootPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostServersCreateServerResponseServer)
    ], PostServersCreateServerResponse.prototype, "server", void 0);
    return PostServersCreateServerResponse;
}(SpeakeasyBase));
export { PostServersCreateServerResponse };
var PostServersRequest = /** @class */ (function (_super) {
    __extends(PostServersRequest, _super);
    function PostServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersCreateServerRequest)
    ], PostServersRequest.prototype, "request", void 0);
    return PostServersRequest;
}(SpeakeasyBase));
export { PostServersRequest };
var PostServersResponse = /** @class */ (function (_super) {
    __extends(PostServersResponse, _super);
    function PostServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersCreateServerResponse)
    ], PostServersResponse.prototype, "createServerResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersResponse.prototype, "statusCode", void 0);
    return PostServersResponse;
}(SpeakeasyBase));
export { PostServersResponse };
