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
var DriveFilesUntrashPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashPathParams, _super);
    function DriveFilesUntrashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashPathParams.prototype, "fileId", void 0);
    return DriveFilesUntrashPathParams;
}(SpeakeasyBase));
export { DriveFilesUntrashPathParams };
var DriveFilesUntrashQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashQueryParams, _super);
    function DriveFilesUntrashQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUntrashQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUntrashQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUntrashQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesUntrashQueryParams.prototype, "userIp", void 0);
    return DriveFilesUntrashQueryParams;
}(SpeakeasyBase));
export { DriveFilesUntrashQueryParams };
var DriveFilesUntrashSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashSecurityOption1, _super);
    function DriveFilesUntrashSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUntrashSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUntrashSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesUntrashSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesUntrashSecurityOption1 };
var DriveFilesUntrashSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashSecurityOption2, _super);
    function DriveFilesUntrashSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUntrashSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUntrashSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesUntrashSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesUntrashSecurityOption2 };
var DriveFilesUntrashSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashSecurityOption3, _super);
    function DriveFilesUntrashSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUntrashSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUntrashSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesUntrashSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesUntrashSecurityOption3 };
var DriveFilesUntrashSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashSecurityOption4, _super);
    function DriveFilesUntrashSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUntrashSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUntrashSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesUntrashSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesUntrashSecurityOption4 };
var DriveFilesUntrashSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashSecurity, _super);
    function DriveFilesUntrashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUntrashSecurityOption1)
    ], DriveFilesUntrashSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUntrashSecurityOption2)
    ], DriveFilesUntrashSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUntrashSecurityOption3)
    ], DriveFilesUntrashSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUntrashSecurityOption4)
    ], DriveFilesUntrashSecurity.prototype, "option4", void 0);
    return DriveFilesUntrashSecurity;
}(SpeakeasyBase));
export { DriveFilesUntrashSecurity };
var DriveFilesUntrashRequest = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashRequest, _super);
    function DriveFilesUntrashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUntrashPathParams)
    ], DriveFilesUntrashRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUntrashQueryParams)
    ], DriveFilesUntrashRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUntrashSecurity)
    ], DriveFilesUntrashRequest.prototype, "security", void 0);
    return DriveFilesUntrashRequest;
}(SpeakeasyBase));
export { DriveFilesUntrashRequest };
var DriveFilesUntrashResponse = /** @class */ (function (_super) {
    __extends(DriveFilesUntrashResponse, _super);
    function DriveFilesUntrashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesUntrashResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesUntrashResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesUntrashResponse.prototype, "statusCode", void 0);
    return DriveFilesUntrashResponse;
}(SpeakeasyBase));
export { DriveFilesUntrashResponse };
