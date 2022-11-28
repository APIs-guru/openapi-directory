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
import * as shared from "../shared";
var DrivePermissionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdatePathParams, _super);
    function DrivePermissionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdatePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdatePathParams.prototype, "permissionId", void 0);
    return DrivePermissionsUpdatePathParams;
}(SpeakeasyBase));
export { DrivePermissionsUpdatePathParams };
var DrivePermissionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateQueryParams, _super);
    function DrivePermissionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeExpiration" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "removeExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transferOwnership" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "transferOwnership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsUpdateQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsUpdateQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsUpdateQueryParams };
var DrivePermissionsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateSecurityOption1, _super);
    function DrivePermissionsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsUpdateSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsUpdateSecurityOption1 };
var DrivePermissionsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateSecurityOption2, _super);
    function DrivePermissionsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsUpdateSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsUpdateSecurityOption2 };
var DrivePermissionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateSecurity, _super);
    function DrivePermissionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsUpdateSecurityOption1)
    ], DrivePermissionsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsUpdateSecurityOption2)
    ], DrivePermissionsUpdateSecurity.prototype, "option2", void 0);
    return DrivePermissionsUpdateSecurity;
}(SpeakeasyBase));
export { DrivePermissionsUpdateSecurity };
var DrivePermissionsUpdateRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateRequest, _super);
    function DrivePermissionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsUpdatePathParams)
    ], DrivePermissionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsUpdateQueryParams)
    ], DrivePermissionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PermissionInput)
    ], DrivePermissionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsUpdateSecurity)
    ], DrivePermissionsUpdateRequest.prototype, "security", void 0);
    return DrivePermissionsUpdateRequest;
}(SpeakeasyBase));
export { DrivePermissionsUpdateRequest };
var DrivePermissionsUpdateResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsUpdateResponse, _super);
    function DrivePermissionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Permission)
    ], DrivePermissionsUpdateResponse.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsUpdateResponse.prototype, "statusCode", void 0);
    return DrivePermissionsUpdateResponse;
}(SpeakeasyBase));
export { DrivePermissionsUpdateResponse };
