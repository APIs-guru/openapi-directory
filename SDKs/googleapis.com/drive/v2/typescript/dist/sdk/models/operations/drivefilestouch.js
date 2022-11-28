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
var DriveFilesTouchPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesTouchPathParams, _super);
    function DriveFilesTouchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesTouchPathParams.prototype, "fileId", void 0);
    return DriveFilesTouchPathParams;
}(SpeakeasyBase));
export { DriveFilesTouchPathParams };
var DriveFilesTouchQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesTouchQueryParams, _super);
    function DriveFilesTouchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTouchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTouchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesTouchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesTouchQueryParams.prototype, "userIp", void 0);
    return DriveFilesTouchQueryParams;
}(SpeakeasyBase));
export { DriveFilesTouchQueryParams };
var DriveFilesTouchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurityOption1, _super);
    function DriveFilesTouchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTouchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTouchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesTouchSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesTouchSecurityOption1 };
var DriveFilesTouchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurityOption2, _super);
    function DriveFilesTouchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTouchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTouchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesTouchSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesTouchSecurityOption2 };
var DriveFilesTouchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurityOption3, _super);
    function DriveFilesTouchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTouchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTouchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesTouchSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesTouchSecurityOption3 };
var DriveFilesTouchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurityOption4, _super);
    function DriveFilesTouchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTouchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTouchSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesTouchSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesTouchSecurityOption4 };
var DriveFilesTouchSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurityOption5, _super);
    function DriveFilesTouchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesTouchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesTouchSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesTouchSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesTouchSecurityOption5 };
var DriveFilesTouchSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesTouchSecurity, _super);
    function DriveFilesTouchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTouchSecurityOption1)
    ], DriveFilesTouchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTouchSecurityOption2)
    ], DriveFilesTouchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTouchSecurityOption3)
    ], DriveFilesTouchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTouchSecurityOption4)
    ], DriveFilesTouchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesTouchSecurityOption5)
    ], DriveFilesTouchSecurity.prototype, "option5", void 0);
    return DriveFilesTouchSecurity;
}(SpeakeasyBase));
export { DriveFilesTouchSecurity };
var DriveFilesTouchRequest = /** @class */ (function (_super) {
    __extends(DriveFilesTouchRequest, _super);
    function DriveFilesTouchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTouchPathParams)
    ], DriveFilesTouchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTouchQueryParams)
    ], DriveFilesTouchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesTouchSecurity)
    ], DriveFilesTouchRequest.prototype, "security", void 0);
    return DriveFilesTouchRequest;
}(SpeakeasyBase));
export { DriveFilesTouchRequest };
var DriveFilesTouchResponse = /** @class */ (function (_super) {
    __extends(DriveFilesTouchResponse, _super);
    function DriveFilesTouchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesTouchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesTouchResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesTouchResponse.prototype, "statusCode", void 0);
    return DriveFilesTouchResponse;
}(SpeakeasyBase));
export { DriveFilesTouchResponse };
