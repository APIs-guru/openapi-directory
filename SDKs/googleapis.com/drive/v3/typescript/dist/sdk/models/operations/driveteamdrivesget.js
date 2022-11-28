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
var DriveTeamdrivesGetPathParams = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetPathParams, _super);
    function DriveTeamdrivesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetPathParams.prototype, "teamDriveId", void 0);
    return DriveTeamdrivesGetPathParams;
}(SpeakeasyBase));
export { DriveTeamdrivesGetPathParams };
var DriveTeamdrivesGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetQueryParams, _super);
    function DriveTeamdrivesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesGetQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetQueryParams.prototype, "userIp", void 0);
    return DriveTeamdrivesGetQueryParams;
}(SpeakeasyBase));
export { DriveTeamdrivesGetQueryParams };
var DriveTeamdrivesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetSecurityOption1, _super);
    function DriveTeamdrivesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveTeamdrivesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveTeamdrivesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveTeamdrivesGetSecurityOption1;
}(SpeakeasyBase));
export { DriveTeamdrivesGetSecurityOption1 };
var DriveTeamdrivesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetSecurityOption2, _super);
    function DriveTeamdrivesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveTeamdrivesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveTeamdrivesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveTeamdrivesGetSecurityOption2;
}(SpeakeasyBase));
export { DriveTeamdrivesGetSecurityOption2 };
var DriveTeamdrivesGetSecurity = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetSecurity, _super);
    function DriveTeamdrivesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveTeamdrivesGetSecurityOption1)
    ], DriveTeamdrivesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveTeamdrivesGetSecurityOption2)
    ], DriveTeamdrivesGetSecurity.prototype, "option2", void 0);
    return DriveTeamdrivesGetSecurity;
}(SpeakeasyBase));
export { DriveTeamdrivesGetSecurity };
var DriveTeamdrivesGetRequest = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetRequest, _super);
    function DriveTeamdrivesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesGetPathParams)
    ], DriveTeamdrivesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesGetQueryParams)
    ], DriveTeamdrivesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesGetSecurity)
    ], DriveTeamdrivesGetRequest.prototype, "security", void 0);
    return DriveTeamdrivesGetRequest;
}(SpeakeasyBase));
export { DriveTeamdrivesGetRequest };
var DriveTeamdrivesGetResponse = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesGetResponse, _super);
    function DriveTeamdrivesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveTeamdrivesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveTeamdrivesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDrive)
    ], DriveTeamdrivesGetResponse.prototype, "teamDrive", void 0);
    return DriveTeamdrivesGetResponse;
}(SpeakeasyBase));
export { DriveTeamdrivesGetResponse };
