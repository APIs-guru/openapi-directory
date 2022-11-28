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
var DrivePermissionsCreatePathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreatePathParams, _super);
    function DrivePermissionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreatePathParams.prototype, "fileId", void 0);
    return DrivePermissionsCreatePathParams;
}(SpeakeasyBase));
export { DrivePermissionsCreatePathParams };
var DrivePermissionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateQueryParams, _super);
    function DrivePermissionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=emailMessage" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "emailMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=moveToNewOwnersRoot" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "moveToNewOwnersRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotificationEmail" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "sendNotificationEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transferOwnership" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "transferOwnership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsCreateQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsCreateQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsCreateQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsCreateQueryParams };
var DrivePermissionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateSecurityOption1, _super);
    function DrivePermissionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsCreateSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsCreateSecurityOption1 };
var DrivePermissionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateSecurityOption2, _super);
    function DrivePermissionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsCreateSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsCreateSecurityOption2 };
var DrivePermissionsCreateSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateSecurity, _super);
    function DrivePermissionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsCreateSecurityOption1)
    ], DrivePermissionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsCreateSecurityOption2)
    ], DrivePermissionsCreateSecurity.prototype, "option2", void 0);
    return DrivePermissionsCreateSecurity;
}(SpeakeasyBase));
export { DrivePermissionsCreateSecurity };
var DrivePermissionsCreateRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateRequest, _super);
    function DrivePermissionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsCreatePathParams)
    ], DrivePermissionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsCreateQueryParams)
    ], DrivePermissionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PermissionInput)
    ], DrivePermissionsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsCreateSecurity)
    ], DrivePermissionsCreateRequest.prototype, "security", void 0);
    return DrivePermissionsCreateRequest;
}(SpeakeasyBase));
export { DrivePermissionsCreateRequest };
var DrivePermissionsCreateResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsCreateResponse, _super);
    function DrivePermissionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Permission)
    ], DrivePermissionsCreateResponse.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsCreateResponse.prototype, "statusCode", void 0);
    return DrivePermissionsCreateResponse;
}(SpeakeasyBase));
export { DrivePermissionsCreateResponse };
