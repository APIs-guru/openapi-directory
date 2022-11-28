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
var DriveFilesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesCreateQueryParams, _super);
    function DriveFilesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreDefaultVisibility" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "ignoreDefaultVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keepRevisionForever" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "keepRevisionForever", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" }),
        __metadata("design:type", Boolean)
    ], DriveFilesCreateQueryParams.prototype, "useContentAsIndexableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesCreateQueryParams.prototype, "userIp", void 0);
    return DriveFilesCreateQueryParams;
}(SpeakeasyBase));
export { DriveFilesCreateQueryParams };
var DriveFilesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesCreateSecurityOption1, _super);
    function DriveFilesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesCreateSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesCreateSecurityOption1 };
var DriveFilesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesCreateSecurityOption2, _super);
    function DriveFilesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesCreateSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesCreateSecurityOption2 };
var DriveFilesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesCreateSecurityOption3, _super);
    function DriveFilesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesCreateSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesCreateSecurityOption3 };
var DriveFilesCreateSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesCreateSecurity, _super);
    function DriveFilesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCreateSecurityOption1)
    ], DriveFilesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCreateSecurityOption2)
    ], DriveFilesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesCreateSecurityOption3)
    ], DriveFilesCreateSecurity.prototype, "option3", void 0);
    return DriveFilesCreateSecurity;
}(SpeakeasyBase));
export { DriveFilesCreateSecurity };
var DriveFilesCreateRequest = /** @class */ (function (_super) {
    __extends(DriveFilesCreateRequest, _super);
    function DriveFilesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesCreateQueryParams)
    ], DriveFilesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], DriveFilesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesCreateSecurity)
    ], DriveFilesCreateRequest.prototype, "security", void 0);
    return DriveFilesCreateRequest;
}(SpeakeasyBase));
export { DriveFilesCreateRequest };
var DriveFilesCreateResponse = /** @class */ (function (_super) {
    __extends(DriveFilesCreateResponse, _super);
    function DriveFilesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesCreateResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesCreateResponse.prototype, "statusCode", void 0);
    return DriveFilesCreateResponse;
}(SpeakeasyBase));
export { DriveFilesCreateResponse };
