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
var DriveCommentsInsertPathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertPathParams, _super);
    function DriveCommentsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertPathParams.prototype, "fileId", void 0);
    return DriveCommentsInsertPathParams;
}(SpeakeasyBase));
export { DriveCommentsInsertPathParams };
var DriveCommentsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertQueryParams, _super);
    function DriveCommentsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsInsertQueryParams.prototype, "userIp", void 0);
    return DriveCommentsInsertQueryParams;
}(SpeakeasyBase));
export { DriveCommentsInsertQueryParams };
var DriveCommentsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertSecurityOption1, _super);
    function DriveCommentsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsInsertSecurityOption1;
}(SpeakeasyBase));
export { DriveCommentsInsertSecurityOption1 };
var DriveCommentsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertSecurityOption2, _super);
    function DriveCommentsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsInsertSecurityOption2;
}(SpeakeasyBase));
export { DriveCommentsInsertSecurityOption2 };
var DriveCommentsInsertSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertSecurity, _super);
    function DriveCommentsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsInsertSecurityOption1)
    ], DriveCommentsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsInsertSecurityOption2)
    ], DriveCommentsInsertSecurity.prototype, "option2", void 0);
    return DriveCommentsInsertSecurity;
}(SpeakeasyBase));
export { DriveCommentsInsertSecurity };
var DriveCommentsInsertRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertRequest, _super);
    function DriveCommentsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsInsertPathParams)
    ], DriveCommentsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsInsertQueryParams)
    ], DriveCommentsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsInsertSecurity)
    ], DriveCommentsInsertRequest.prototype, "security", void 0);
    return DriveCommentsInsertRequest;
}(SpeakeasyBase));
export { DriveCommentsInsertRequest };
var DriveCommentsInsertResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsInsertResponse, _super);
    function DriveCommentsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsInsertResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveCommentsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveCommentsInsertResponse.prototype, "statusCode", void 0);
    return DriveCommentsInsertResponse;
}(SpeakeasyBase));
export { DriveCommentsInsertResponse };
