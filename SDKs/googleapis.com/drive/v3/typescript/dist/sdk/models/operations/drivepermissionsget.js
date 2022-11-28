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
var DrivePermissionsGetPathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetPathParams, _super);
    function DrivePermissionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissionId" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetPathParams.prototype, "permissionId", void 0);
    return DrivePermissionsGetPathParams;
}(SpeakeasyBase));
export { DrivePermissionsGetPathParams };
var DrivePermissionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetQueryParams, _super);
    function DrivePermissionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsGetQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsGetQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsGetQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsGetQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsGetQueryParams };
var DrivePermissionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption1, _super);
    function DrivePermissionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption1 };
var DrivePermissionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption2, _super);
    function DrivePermissionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption2 };
var DrivePermissionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption3, _super);
    function DrivePermissionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption3;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption3 };
var DrivePermissionsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption4, _super);
    function DrivePermissionsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption4;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption4 };
var DrivePermissionsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption5, _super);
    function DrivePermissionsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption5;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption5 };
var DrivePermissionsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurityOption6, _super);
    function DrivePermissionsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetSecurityOption6.prototype, "oauth2c", void 0);
    return DrivePermissionsGetSecurityOption6;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurityOption6 };
var DrivePermissionsGetSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetSecurity, _super);
    function DrivePermissionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption1)
    ], DrivePermissionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption2)
    ], DrivePermissionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption3)
    ], DrivePermissionsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption4)
    ], DrivePermissionsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption5)
    ], DrivePermissionsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetSecurityOption6)
    ], DrivePermissionsGetSecurity.prototype, "option6", void 0);
    return DrivePermissionsGetSecurity;
}(SpeakeasyBase));
export { DrivePermissionsGetSecurity };
var DrivePermissionsGetRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetRequest, _super);
    function DrivePermissionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetPathParams)
    ], DrivePermissionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetQueryParams)
    ], DrivePermissionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetSecurity)
    ], DrivePermissionsGetRequest.prototype, "security", void 0);
    return DrivePermissionsGetRequest;
}(SpeakeasyBase));
export { DrivePermissionsGetRequest };
var DrivePermissionsGetResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetResponse, _super);
    function DrivePermissionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Permission)
    ], DrivePermissionsGetResponse.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsGetResponse.prototype, "statusCode", void 0);
    return DrivePermissionsGetResponse;
}(SpeakeasyBase));
export { DrivePermissionsGetResponse };
