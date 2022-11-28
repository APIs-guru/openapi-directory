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
var DriveFilesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DriveFilesUpdatePathParams, _super);
    function DriveFilesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesUpdatePathParams.prototype, "fileId", void 0);
    return DriveFilesUpdatePathParams;
}(SpeakeasyBase));
export { DriveFilesUpdatePathParams };
var DriveFilesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateQueryParams, _super);
    function DriveFilesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addParents" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "addParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keepRevisionForever" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "keepRevisionForever", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeParents" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "removeParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" }),
        __metadata("design:type", Boolean)
    ], DriveFilesUpdateQueryParams.prototype, "useContentAsIndexableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesUpdateQueryParams.prototype, "userIp", void 0);
    return DriveFilesUpdateQueryParams;
}(SpeakeasyBase));
export { DriveFilesUpdateQueryParams };
var DriveFilesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption1, _super);
    function DriveFilesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurityOption1 };
var DriveFilesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption2, _super);
    function DriveFilesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurityOption2 };
var DriveFilesUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption3, _super);
    function DriveFilesUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurityOption3 };
var DriveFilesUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption4, _super);
    function DriveFilesUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurityOption4 };
var DriveFilesUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurityOption5, _super);
    function DriveFilesUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesUpdateSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurityOption5 };
var DriveFilesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateSecurity, _super);
    function DriveFilesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption1)
    ], DriveFilesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption2)
    ], DriveFilesUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption3)
    ], DriveFilesUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption4)
    ], DriveFilesUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesUpdateSecurityOption5)
    ], DriveFilesUpdateSecurity.prototype, "option5", void 0);
    return DriveFilesUpdateSecurity;
}(SpeakeasyBase));
export { DriveFilesUpdateSecurity };
var DriveFilesUpdateRequest = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateRequest, _super);
    function DriveFilesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUpdatePathParams)
    ], DriveFilesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUpdateQueryParams)
    ], DriveFilesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], DriveFilesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesUpdateSecurity)
    ], DriveFilesUpdateRequest.prototype, "security", void 0);
    return DriveFilesUpdateRequest;
}(SpeakeasyBase));
export { DriveFilesUpdateRequest };
var DriveFilesUpdateResponse = /** @class */ (function (_super) {
    __extends(DriveFilesUpdateResponse, _super);
    function DriveFilesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesUpdateResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesUpdateResponse.prototype, "statusCode", void 0);
    return DriveFilesUpdateResponse;
}(SpeakeasyBase));
export { DriveFilesUpdateResponse };
