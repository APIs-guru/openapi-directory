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
export var DriveFilesInsertVisibilityEnum;
(function (DriveFilesInsertVisibilityEnum) {
    DriveFilesInsertVisibilityEnum["Default"] = "DEFAULT";
    DriveFilesInsertVisibilityEnum["Private"] = "PRIVATE";
})(DriveFilesInsertVisibilityEnum || (DriveFilesInsertVisibilityEnum = {}));
var DriveFilesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesInsertQueryParams, _super);
    function DriveFilesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convert" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "convert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocr" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "ocr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pinned" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "timedTextLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextTrackName" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "timedTextTrackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" }),
        __metadata("design:type", Boolean)
    ], DriveFilesInsertQueryParams.prototype, "useContentAsIndexableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], DriveFilesInsertQueryParams.prototype, "visibility", void 0);
    return DriveFilesInsertQueryParams;
}(SpeakeasyBase));
export { DriveFilesInsertQueryParams };
var DriveFilesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesInsertSecurityOption1, _super);
    function DriveFilesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesInsertSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesInsertSecurityOption1 };
var DriveFilesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesInsertSecurityOption2, _super);
    function DriveFilesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesInsertSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesInsertSecurityOption2 };
var DriveFilesInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesInsertSecurityOption3, _super);
    function DriveFilesInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesInsertSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesInsertSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesInsertSecurityOption3 };
var DriveFilesInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesInsertSecurityOption4, _super);
    function DriveFilesInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesInsertSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesInsertSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesInsertSecurityOption4 };
var DriveFilesInsertSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesInsertSecurity, _super);
    function DriveFilesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesInsertSecurityOption1)
    ], DriveFilesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesInsertSecurityOption2)
    ], DriveFilesInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesInsertSecurityOption3)
    ], DriveFilesInsertSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesInsertSecurityOption4)
    ], DriveFilesInsertSecurity.prototype, "option4", void 0);
    return DriveFilesInsertSecurity;
}(SpeakeasyBase));
export { DriveFilesInsertSecurity };
var DriveFilesInsertRequest = /** @class */ (function (_super) {
    __extends(DriveFilesInsertRequest, _super);
    function DriveFilesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesInsertQueryParams)
    ], DriveFilesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], DriveFilesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesInsertSecurity)
    ], DriveFilesInsertRequest.prototype, "security", void 0);
    return DriveFilesInsertRequest;
}(SpeakeasyBase));
export { DriveFilesInsertRequest };
var DriveFilesInsertResponse = /** @class */ (function (_super) {
    __extends(DriveFilesInsertResponse, _super);
    function DriveFilesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesInsertResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesInsertResponse.prototype, "statusCode", void 0);
    return DriveFilesInsertResponse;
}(SpeakeasyBase));
export { DriveFilesInsertResponse };
