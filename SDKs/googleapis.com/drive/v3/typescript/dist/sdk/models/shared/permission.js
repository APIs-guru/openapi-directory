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
var PermissionPermissionDetails = /** @class */ (function (_super) {
    __extends(PermissionPermissionDetails, _super);
    function PermissionPermissionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inherited" }),
        __metadata("design:type", Boolean)
    ], PermissionPermissionDetails.prototype, "inherited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritedFrom" }),
        __metadata("design:type", String)
    ], PermissionPermissionDetails.prototype, "inheritedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionType" }),
        __metadata("design:type", String)
    ], PermissionPermissionDetails.prototype, "permissionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], PermissionPermissionDetails.prototype, "role", void 0);
    return PermissionPermissionDetails;
}(SpeakeasyBase));
export { PermissionPermissionDetails };
var PermissionTeamDrivePermissionDetails = /** @class */ (function (_super) {
    __extends(PermissionTeamDrivePermissionDetails, _super);
    function PermissionTeamDrivePermissionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inherited" }),
        __metadata("design:type", Boolean)
    ], PermissionTeamDrivePermissionDetails.prototype, "inherited", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inheritedFrom" }),
        __metadata("design:type", String)
    ], PermissionTeamDrivePermissionDetails.prototype, "inheritedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], PermissionTeamDrivePermissionDetails.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamDrivePermissionType" }),
        __metadata("design:type", String)
    ], PermissionTeamDrivePermissionDetails.prototype, "teamDrivePermissionType", void 0);
    return PermissionTeamDrivePermissionDetails;
}(SpeakeasyBase));
export { PermissionTeamDrivePermissionDetails };
// Permission
/**
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowFileDiscovery" }),
        __metadata("design:type", Boolean)
    ], Permission.prototype, "allowFileDiscovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Permission.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Permission.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Permission.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], Permission.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", Date)
    ], Permission.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Permission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Permission.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingOwner" }),
        __metadata("design:type", Boolean)
    ], Permission.prototype, "pendingOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionDetails", elemType: PermissionPermissionDetails }),
        __metadata("design:type", Array)
    ], Permission.prototype, "permissionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoLink" }),
        __metadata("design:type", String)
    ], Permission.prototype, "photoLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Permission.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teamDrivePermissionDetails", elemType: PermissionTeamDrivePermissionDetails }),
        __metadata("design:type", Array)
    ], Permission.prototype, "teamDrivePermissionDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Permission.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], Permission.prototype, "view", void 0);
    return Permission;
}(SpeakeasyBase));
export { Permission };
// PermissionInput
/**
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
var PermissionInput = /** @class */ (function (_super) {
    __extends(PermissionInput, _super);
    function PermissionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowFileDiscovery" }),
        __metadata("design:type", Boolean)
    ], PermissionInput.prototype, "allowFileDiscovery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], PermissionInput.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddress" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationTime" }),
        __metadata("design:type", Date)
    ], PermissionInput.prototype, "expirationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingOwner" }),
        __metadata("design:type", Boolean)
    ], PermissionInput.prototype, "pendingOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoLink" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "photoLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], PermissionInput.prototype, "view", void 0);
    return PermissionInput;
}(SpeakeasyBase));
export { PermissionInput };
