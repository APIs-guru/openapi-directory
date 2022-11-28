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
var DriveFilesDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveFilesDeletePathParams, _super);
    function DriveFilesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesDeletePathParams.prototype, "fileId", void 0);
    return DriveFilesDeletePathParams;
}(SpeakeasyBase));
export { DriveFilesDeletePathParams };
var DriveFilesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteQueryParams, _super);
    function DriveFilesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesDeleteQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesDeleteQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesDeleteQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesDeleteQueryParams.prototype, "userIp", void 0);
    return DriveFilesDeleteQueryParams;
}(SpeakeasyBase));
export { DriveFilesDeleteQueryParams };
var DriveFilesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteSecurityOption1, _super);
    function DriveFilesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesDeleteSecurityOption1 };
var DriveFilesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteSecurityOption2, _super);
    function DriveFilesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesDeleteSecurityOption2 };
var DriveFilesDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteSecurityOption3, _super);
    function DriveFilesDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesDeleteSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesDeleteSecurityOption3 };
var DriveFilesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteSecurity, _super);
    function DriveFilesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesDeleteSecurityOption1)
    ], DriveFilesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesDeleteSecurityOption2)
    ], DriveFilesDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesDeleteSecurityOption3)
    ], DriveFilesDeleteSecurity.prototype, "option3", void 0);
    return DriveFilesDeleteSecurity;
}(SpeakeasyBase));
export { DriveFilesDeleteSecurity };
var DriveFilesDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteRequest, _super);
    function DriveFilesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesDeletePathParams)
    ], DriveFilesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesDeleteQueryParams)
    ], DriveFilesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesDeleteSecurity)
    ], DriveFilesDeleteRequest.prototype, "security", void 0);
    return DriveFilesDeleteRequest;
}(SpeakeasyBase));
export { DriveFilesDeleteRequest };
var DriveFilesDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveFilesDeleteResponse, _super);
    function DriveFilesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesDeleteResponse.prototype, "statusCode", void 0);
    return DriveFilesDeleteResponse;
}(SpeakeasyBase));
export { DriveFilesDeleteResponse };
