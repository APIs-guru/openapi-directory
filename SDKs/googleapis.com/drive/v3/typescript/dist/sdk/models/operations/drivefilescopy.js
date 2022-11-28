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
var DriveFilesCopyPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesCopyPathParams, _super);
    function DriveFilesCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesCopyPathParams.prototype, "fileId", void 0);
    return DriveFilesCopyPathParams;
}(SpeakeasyBase));
export { DriveFilesCopyPathParams };
var DriveFilesCopyQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesCopyQueryParams, _super);
    function DriveFilesCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreDefaultVisibility" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "ignoreDefaultVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keepRevisionForever" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "keepRevisionForever", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCopyQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesCopyQueryParams.prototype, "userIp", void 0);
    return DriveFilesCopyQueryParams;
}(SpeakeasyBase));
export { DriveFilesCopyQueryParams };
var DriveFilesCopySecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesCopySecurityOption1, _super);
    function DriveFilesCopySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCopySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCopySecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesCopySecurityOption1;
}(SpeakeasyBase));
export { DriveFilesCopySecurityOption1 };
var DriveFilesCopySecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesCopySecurityOption2, _super);
    function DriveFilesCopySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCopySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCopySecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesCopySecurityOption2;
}(SpeakeasyBase));
export { DriveFilesCopySecurityOption2 };
var DriveFilesCopySecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesCopySecurityOption3, _super);
    function DriveFilesCopySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCopySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCopySecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesCopySecurityOption3;
}(SpeakeasyBase));
export { DriveFilesCopySecurityOption3 };
var DriveFilesCopySecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesCopySecurityOption4, _super);
    function DriveFilesCopySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCopySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCopySecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesCopySecurityOption4;
}(SpeakeasyBase));
export { DriveFilesCopySecurityOption4 };
var DriveFilesCopySecurity = /** @class */ (function (_super) {
    __extends(DriveFilesCopySecurity, _super);
    function DriveFilesCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCopySecurityOption1)
    ], DriveFilesCopySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCopySecurityOption2)
    ], DriveFilesCopySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCopySecurityOption3)
    ], DriveFilesCopySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCopySecurityOption4)
    ], DriveFilesCopySecurity.prototype, "option4", void 0);
    return DriveFilesCopySecurity;
}(SpeakeasyBase));
export { DriveFilesCopySecurity };
var DriveFilesCopyRequest = /** @class */ (function (_super) {
    __extends(DriveFilesCopyRequest, _super);
    function DriveFilesCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesCopyPathParams)
    ], DriveFilesCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesCopyQueryParams)
    ], DriveFilesCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FileInput)
    ], DriveFilesCopyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesCopySecurity)
    ], DriveFilesCopyRequest.prototype, "security", void 0);
    return DriveFilesCopyRequest;
}(SpeakeasyBase));
export { DriveFilesCopyRequest };
var DriveFilesCopyResponse = /** @class */ (function (_super) {
    __extends(DriveFilesCopyResponse, _super);
    function DriveFilesCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesCopyResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesCopyResponse.prototype, "statusCode", void 0);
    return DriveFilesCopyResponse;
}(SpeakeasyBase));
export { DriveFilesCopyResponse };
