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
var DriveFilesExportPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesExportPathParams, _super);
    function DriveFilesExportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesExportPathParams.prototype, "fileId", void 0);
    return DriveFilesExportPathParams;
}(SpeakeasyBase));
export { DriveFilesExportPathParams };
var DriveFilesExportQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesExportQueryParams, _super);
    function DriveFilesExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mimeType" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesExportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesExportQueryParams.prototype, "userIp", void 0);
    return DriveFilesExportQueryParams;
}(SpeakeasyBase));
export { DriveFilesExportQueryParams };
var DriveFilesExportSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption1, _super);
    function DriveFilesExportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesExportSecurityOption1 };
var DriveFilesExportSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption2, _super);
    function DriveFilesExportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesExportSecurityOption2 };
var DriveFilesExportSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurityOption3, _super);
    function DriveFilesExportSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesExportSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesExportSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesExportSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesExportSecurityOption3 };
var DriveFilesExportSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesExportSecurity, _super);
    function DriveFilesExportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption1)
    ], DriveFilesExportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption2)
    ], DriveFilesExportSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesExportSecurityOption3)
    ], DriveFilesExportSecurity.prototype, "option3", void 0);
    return DriveFilesExportSecurity;
}(SpeakeasyBase));
export { DriveFilesExportSecurity };
var DriveFilesExportRequest = /** @class */ (function (_super) {
    __extends(DriveFilesExportRequest, _super);
    function DriveFilesExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesExportPathParams)
    ], DriveFilesExportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesExportQueryParams)
    ], DriveFilesExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesExportSecurity)
    ], DriveFilesExportRequest.prototype, "security", void 0);
    return DriveFilesExportRequest;
}(SpeakeasyBase));
export { DriveFilesExportRequest };
var DriveFilesExportResponse = /** @class */ (function (_super) {
    __extends(DriveFilesExportResponse, _super);
    function DriveFilesExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesExportResponse.prototype, "statusCode", void 0);
    return DriveFilesExportResponse;
}(SpeakeasyBase));
export { DriveFilesExportResponse };
