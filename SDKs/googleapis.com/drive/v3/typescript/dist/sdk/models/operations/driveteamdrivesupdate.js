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
var DriveTeamdrivesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesUpdatePathParams, _super);
    function DriveTeamdrivesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdatePathParams.prototype, "teamDriveId", void 0);
    return DriveTeamdrivesUpdatePathParams;
}(SpeakeasyBase));
export { DriveTeamdrivesUpdatePathParams };
var DriveTeamdrivesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesUpdateQueryParams, _super);
    function DriveTeamdrivesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useDomainAdminAccess" }),
        __metadata("design:type", Boolean)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "useDomainAdminAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateQueryParams.prototype, "userIp", void 0);
    return DriveTeamdrivesUpdateQueryParams;
}(SpeakeasyBase));
export { DriveTeamdrivesUpdateQueryParams };
var DriveTeamdrivesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesUpdateSecurity, _super);
    function DriveTeamdrivesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveTeamdrivesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveTeamdrivesUpdateSecurity.prototype, "oauth2c", void 0);
    return DriveTeamdrivesUpdateSecurity;
}(SpeakeasyBase));
export { DriveTeamdrivesUpdateSecurity };
var DriveTeamdrivesUpdateRequest = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesUpdateRequest, _super);
    function DriveTeamdrivesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesUpdatePathParams)
    ], DriveTeamdrivesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesUpdateQueryParams)
    ], DriveTeamdrivesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TeamDrive)
    ], DriveTeamdrivesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveTeamdrivesUpdateSecurity)
    ], DriveTeamdrivesUpdateRequest.prototype, "security", void 0);
    return DriveTeamdrivesUpdateRequest;
}(SpeakeasyBase));
export { DriveTeamdrivesUpdateRequest };
var DriveTeamdrivesUpdateResponse = /** @class */ (function (_super) {
    __extends(DriveTeamdrivesUpdateResponse, _super);
    function DriveTeamdrivesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveTeamdrivesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveTeamdrivesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TeamDrive)
    ], DriveTeamdrivesUpdateResponse.prototype, "teamDrive", void 0);
    return DriveTeamdrivesUpdateResponse;
}(SpeakeasyBase));
export { DriveTeamdrivesUpdateResponse };
