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
var DriveFilesTrashPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesTrashPathParams, _super);
    function DriveFilesTrashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesTrashPathParams.prototype, "fileId", void 0);
    return DriveFilesTrashPathParams;
}(SpeakeasyBase));
export { DriveFilesTrashPathParams };
var DriveFilesTrashQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesTrashQueryParams, _super);
    function DriveFilesTrashQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTrashQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTrashQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTrashQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesTrashQueryParams.prototype, "userIp", void 0);
    return DriveFilesTrashQueryParams;
}(SpeakeasyBase));
export { DriveFilesTrashQueryParams };
var DriveFilesTrashSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesTrashSecurityOption1, _super);
    function DriveFilesTrashSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTrashSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTrashSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesTrashSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesTrashSecurityOption1 };
var DriveFilesTrashSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesTrashSecurityOption2, _super);
    function DriveFilesTrashSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTrashSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTrashSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesTrashSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesTrashSecurityOption2 };
var DriveFilesTrashSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesTrashSecurityOption3, _super);
    function DriveFilesTrashSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTrashSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTrashSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesTrashSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesTrashSecurityOption3 };
var DriveFilesTrashSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesTrashSecurityOption4, _super);
    function DriveFilesTrashSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTrashSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTrashSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesTrashSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesTrashSecurityOption4 };
var DriveFilesTrashSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesTrashSecurity, _super);
    function DriveFilesTrashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTrashSecurityOption1)
    ], DriveFilesTrashSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTrashSecurityOption2)
    ], DriveFilesTrashSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTrashSecurityOption3)
    ], DriveFilesTrashSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTrashSecurityOption4)
    ], DriveFilesTrashSecurity.prototype, "option4", void 0);
    return DriveFilesTrashSecurity;
}(SpeakeasyBase));
export { DriveFilesTrashSecurity };
var DriveFilesTrashRequest = /** @class */ (function (_super) {
    __extends(DriveFilesTrashRequest, _super);
    function DriveFilesTrashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTrashPathParams)
    ], DriveFilesTrashRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTrashQueryParams)
    ], DriveFilesTrashRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTrashSecurity)
    ], DriveFilesTrashRequest.prototype, "security", void 0);
    return DriveFilesTrashRequest;
}(SpeakeasyBase));
export { DriveFilesTrashRequest };
var DriveFilesTrashResponse = /** @class */ (function (_super) {
    __extends(DriveFilesTrashResponse, _super);
    function DriveFilesTrashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesTrashResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesTrashResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesTrashResponse.prototype, "statusCode", void 0);
    return DriveFilesTrashResponse;
}(SpeakeasyBase));
export { DriveFilesTrashResponse };
