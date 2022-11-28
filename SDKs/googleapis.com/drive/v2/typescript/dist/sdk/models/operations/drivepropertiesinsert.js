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
var DrivePropertiesInsertPathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertPathParams, _super);
    function DrivePropertiesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertPathParams.prototype, "fileId", void 0);
    return DrivePropertiesInsertPathParams;
}(SpeakeasyBase));
export { DrivePropertiesInsertPathParams };
var DrivePropertiesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertQueryParams, _super);
    function DrivePropertiesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesInsertQueryParams.prototype, "userIp", void 0);
    return DrivePropertiesInsertQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesInsertQueryParams };
var DrivePropertiesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertSecurityOption1, _super);
    function DrivePropertiesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesInsertSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesInsertSecurityOption1 };
var DrivePropertiesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertSecurityOption2, _super);
    function DrivePropertiesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesInsertSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesInsertSecurityOption2 };
var DrivePropertiesInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertSecurityOption3, _super);
    function DrivePropertiesInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesInsertSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesInsertSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesInsertSecurityOption3 };
var DrivePropertiesInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertSecurityOption4, _super);
    function DrivePropertiesInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesInsertSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesInsertSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesInsertSecurityOption4 };
var DrivePropertiesInsertSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertSecurity, _super);
    function DrivePropertiesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesInsertSecurityOption1)
    ], DrivePropertiesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesInsertSecurityOption2)
    ], DrivePropertiesInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesInsertSecurityOption3)
    ], DrivePropertiesInsertSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesInsertSecurityOption4)
    ], DrivePropertiesInsertSecurity.prototype, "option4", void 0);
    return DrivePropertiesInsertSecurity;
}(SpeakeasyBase));
export { DrivePropertiesInsertSecurity };
var DrivePropertiesInsertRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertRequest, _super);
    function DrivePropertiesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesInsertPathParams)
    ], DrivePropertiesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesInsertQueryParams)
    ], DrivePropertiesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesInsertSecurity)
    ], DrivePropertiesInsertRequest.prototype, "security", void 0);
    return DrivePropertiesInsertRequest;
}(SpeakeasyBase));
export { DrivePropertiesInsertRequest };
var DrivePropertiesInsertResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesInsertResponse, _super);
    function DrivePropertiesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesInsertResponse.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesInsertResponse.prototype, "statusCode", void 0);
    return DrivePropertiesInsertResponse;
}(SpeakeasyBase));
export { DrivePropertiesInsertResponse };
