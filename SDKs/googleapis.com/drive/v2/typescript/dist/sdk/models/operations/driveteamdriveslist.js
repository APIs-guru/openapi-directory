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
var DriveTeamdrivesListQueryParams = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListQueryParams, _super);
    function DriveTeamdrivesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DriveTeamdrivesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesListQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesListQueryParams.prototype, "userIp", void 0);
    return DriveTeamdrivesListQueryParams;
}(SpeakeasyBase));
export { DriveTeamdrivesListQueryParams };
var DriveTeamdrivesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListSecurityOption1, _super);
    function DriveTeamdrivesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveTeamdrivesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveTeamdrivesListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveTeamdrivesListSecurityOption1;
}(SpeakeasyBase));
export { DriveTeamdrivesListSecurityOption1 };
var DriveTeamdrivesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListSecurityOption2, _super);
    function DriveTeamdrivesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveTeamdrivesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveTeamdrivesListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveTeamdrivesListSecurityOption2;
}(SpeakeasyBase));
export { DriveTeamdrivesListSecurityOption2 };
var DriveTeamdrivesListSecurity = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListSecurity, _super);
    function DriveTeamdrivesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveTeamdrivesListSecurityOption1)
    ], DriveTeamdrivesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveTeamdrivesListSecurityOption2)
    ], DriveTeamdrivesListSecurity.prototype, "option2", void 0);
    return DriveTeamdrivesListSecurity;
}(SpeakeasyBase));
export { DriveTeamdrivesListSecurity };
var DriveTeamdrivesListRequest = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListRequest, _super);
    function DriveTeamdrivesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesListQueryParams)
    ], DriveTeamdrivesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesListSecurity)
    ], DriveTeamdrivesListRequest.prototype, "security", void 0);
    return DriveTeamdrivesListRequest;
}(SpeakeasyBase));
export { DriveTeamdrivesListRequest };
var DriveTeamdrivesListResponse = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesListResponse, _super);
    function DriveTeamdrivesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveTeamdrivesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveTeamdrivesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDriveList)
    ], DriveTeamdrivesListResponse.prototype, "teamDriveList", void 0);
    return DriveTeamdrivesListResponse;
}(SpeakeasyBase));
export { DriveTeamdrivesListResponse };
