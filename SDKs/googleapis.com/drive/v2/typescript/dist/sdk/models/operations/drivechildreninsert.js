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
var DriveChildrenInsertPathParams = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertPathParams, _super);
    function DriveChildrenInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertPathParams.prototype, "folderId", void 0);
    return DriveChildrenInsertPathParams;
}(SpeakeasyBase));
export { DriveChildrenInsertPathParams };
var DriveChildrenInsertQueryParams = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertQueryParams, _super);
    function DriveChildrenInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenInsertQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenInsertQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenInsertQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChildrenInsertQueryParams.prototype, "userIp", void 0);
    return DriveChildrenInsertQueryParams;
}(SpeakeasyBase));
export { DriveChildrenInsertQueryParams };
var DriveChildrenInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertSecurityOption1, _super);
    function DriveChildrenInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChildrenInsertSecurityOption1;
}(SpeakeasyBase));
export { DriveChildrenInsertSecurityOption1 };
var DriveChildrenInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertSecurityOption2, _super);
    function DriveChildrenInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChildrenInsertSecurityOption2;
}(SpeakeasyBase));
export { DriveChildrenInsertSecurityOption2 };
var DriveChildrenInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertSecurityOption3, _super);
    function DriveChildrenInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenInsertSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChildrenInsertSecurityOption3;
}(SpeakeasyBase));
export { DriveChildrenInsertSecurityOption3 };
var DriveChildrenInsertSecurity = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertSecurity, _super);
    function DriveChildrenInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenInsertSecurityOption1)
    ], DriveChildrenInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenInsertSecurityOption2)
    ], DriveChildrenInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenInsertSecurityOption3)
    ], DriveChildrenInsertSecurity.prototype, "option3", void 0);
    return DriveChildrenInsertSecurity;
}(SpeakeasyBase));
export { DriveChildrenInsertSecurity };
var DriveChildrenInsertRequest = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertRequest, _super);
    function DriveChildrenInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenInsertPathParams)
    ], DriveChildrenInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenInsertQueryParams)
    ], DriveChildrenInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChildReference)
    ], DriveChildrenInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenInsertSecurity)
    ], DriveChildrenInsertRequest.prototype, "security", void 0);
    return DriveChildrenInsertRequest;
}(SpeakeasyBase));
export { DriveChildrenInsertRequest };
var DriveChildrenInsertResponse = /** @class */ (function (_super) {
    __extends(DriveChildrenInsertResponse, _super);
    function DriveChildrenInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChildReference)
    ], DriveChildrenInsertResponse.prototype, "childReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChildrenInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChildrenInsertResponse.prototype, "statusCode", void 0);
    return DriveChildrenInsertResponse;
}(SpeakeasyBase));
export { DriveChildrenInsertResponse };
