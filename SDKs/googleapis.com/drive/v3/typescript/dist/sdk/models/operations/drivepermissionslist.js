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
var DrivePermissionsListPathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsListPathParams, _super);
    function DrivePermissionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePermissionsListPathParams.prototype, "fileId", void 0);
    return DrivePermissionsListPathParams;
}(SpeakeasyBase));
export { DrivePermissionsListPathParams };
var DrivePermissionsListQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsListQueryParams, _super);
    function DrivePermissionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DrivePermissionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsListQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsListQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsListQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsListQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsListQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsListQueryParams };
var DrivePermissionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption1, _super);
    function DrivePermissionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption1 };
var DrivePermissionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption2, _super);
    function DrivePermissionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption2 };
var DrivePermissionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption3, _super);
    function DrivePermissionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption3;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption3 };
var DrivePermissionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption4, _super);
    function DrivePermissionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption4;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption4 };
var DrivePermissionsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption5, _super);
    function DrivePermissionsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption5.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption5;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption5 };
var DrivePermissionsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurityOption6, _super);
    function DrivePermissionsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsListSecurityOption6.prototype, "oauth2c", void 0);
    return DrivePermissionsListSecurityOption6;
}(SpeakeasyBase));
export { DrivePermissionsListSecurityOption6 };
var DrivePermissionsListSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsListSecurity, _super);
    function DrivePermissionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption1)
    ], DrivePermissionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption2)
    ], DrivePermissionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption3)
    ], DrivePermissionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption4)
    ], DrivePermissionsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption5)
    ], DrivePermissionsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsListSecurityOption6)
    ], DrivePermissionsListSecurity.prototype, "option6", void 0);
    return DrivePermissionsListSecurity;
}(SpeakeasyBase));
export { DrivePermissionsListSecurity };
var DrivePermissionsListRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsListRequest, _super);
    function DrivePermissionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsListPathParams)
    ], DrivePermissionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsListQueryParams)
    ], DrivePermissionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsListSecurity)
    ], DrivePermissionsListRequest.prototype, "security", void 0);
    return DrivePermissionsListRequest;
}(SpeakeasyBase));
export { DrivePermissionsListRequest };
var DrivePermissionsListResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsListResponse, _super);
    function DrivePermissionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PermissionList)
    ], DrivePermissionsListResponse.prototype, "permissionList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsListResponse.prototype, "statusCode", void 0);
    return DrivePermissionsListResponse;
}(SpeakeasyBase));
export { DrivePermissionsListResponse };
