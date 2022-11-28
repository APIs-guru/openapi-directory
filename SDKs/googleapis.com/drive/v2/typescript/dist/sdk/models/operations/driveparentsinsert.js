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
var DriveParentsInsertPathParams = /** @class */ (function (_super) {
    __extends(DriveParentsInsertPathParams, _super);
    function DriveParentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveParentsInsertPathParams.prototype, "fileId", void 0);
    return DriveParentsInsertPathParams;
}(SpeakeasyBase));
export { DriveParentsInsertPathParams };
var DriveParentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DriveParentsInsertQueryParams, _super);
    function DriveParentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveParentsInsertQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveParentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveParentsInsertQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveParentsInsertQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveParentsInsertQueryParams.prototype, "userIp", void 0);
    return DriveParentsInsertQueryParams;
}(SpeakeasyBase));
export { DriveParentsInsertQueryParams };
var DriveParentsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveParentsInsertSecurityOption1, _super);
    function DriveParentsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DriveParentsInsertSecurityOption1;
}(SpeakeasyBase));
export { DriveParentsInsertSecurityOption1 };
var DriveParentsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveParentsInsertSecurityOption2, _super);
    function DriveParentsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DriveParentsInsertSecurityOption2;
}(SpeakeasyBase));
export { DriveParentsInsertSecurityOption2 };
var DriveParentsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveParentsInsertSecurityOption3, _super);
    function DriveParentsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return DriveParentsInsertSecurityOption3;
}(SpeakeasyBase));
export { DriveParentsInsertSecurityOption3 };
var DriveParentsInsertSecurity = /** @class */ (function (_super) {
    __extends(DriveParentsInsertSecurity, _super);
    function DriveParentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsInsertSecurityOption1)
    ], DriveParentsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsInsertSecurityOption2)
    ], DriveParentsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsInsertSecurityOption3)
    ], DriveParentsInsertSecurity.prototype, "option3", void 0);
    return DriveParentsInsertSecurity;
}(SpeakeasyBase));
export { DriveParentsInsertSecurity };
var DriveParentsInsertRequest = /** @class */ (function (_super) {
    __extends(DriveParentsInsertRequest, _super);
    function DriveParentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsInsertPathParams)
    ], DriveParentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsInsertQueryParams)
    ], DriveParentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ParentReference)
    ], DriveParentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsInsertSecurity)
    ], DriveParentsInsertRequest.prototype, "security", void 0);
    return DriveParentsInsertRequest;
}(SpeakeasyBase));
export { DriveParentsInsertRequest };
var DriveParentsInsertResponse = /** @class */ (function (_super) {
    __extends(DriveParentsInsertResponse, _super);
    function DriveParentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveParentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ParentReference)
    ], DriveParentsInsertResponse.prototype, "parentReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveParentsInsertResponse.prototype, "statusCode", void 0);
    return DriveParentsInsertResponse;
}(SpeakeasyBase));
export { DriveParentsInsertResponse };
