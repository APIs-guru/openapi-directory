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
var DrivePermissionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeletePathParams, _super);
    function DrivePermissionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeletePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeletePathParams.prototype, "permissionId", void 0);
    return DrivePermissionsDeletePathParams;
}(SpeakeasyBase));
export { DrivePermissionsDeletePathParams };
var DrivePermissionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteQueryParams, _super);
    function DrivePermissionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsDeleteQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsDeleteQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsDeleteQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsDeleteQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsDeleteQueryParams };
var DrivePermissionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteSecurityOption1, _super);
    function DrivePermissionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsDeleteSecurityOption1 };
var DrivePermissionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteSecurityOption2, _super);
    function DrivePermissionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsDeleteSecurityOption2 };
var DrivePermissionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteSecurity, _super);
    function DrivePermissionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsDeleteSecurityOption1)
    ], DrivePermissionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsDeleteSecurityOption2)
    ], DrivePermissionsDeleteSecurity.prototype, "option2", void 0);
    return DrivePermissionsDeleteSecurity;
}(SpeakeasyBase));
export { DrivePermissionsDeleteSecurity };
var DrivePermissionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteRequest, _super);
    function DrivePermissionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsDeletePathParams)
    ], DrivePermissionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsDeleteQueryParams)
    ], DrivePermissionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsDeleteSecurity)
    ], DrivePermissionsDeleteRequest.prototype, "security", void 0);
    return DrivePermissionsDeleteRequest;
}(SpeakeasyBase));
export { DrivePermissionsDeleteRequest };
var DrivePermissionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsDeleteResponse, _super);
    function DrivePermissionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsDeleteResponse.prototype, "statusCode", void 0);
    return DrivePermissionsDeleteResponse;
}(SpeakeasyBase));
export { DrivePermissionsDeleteResponse };
