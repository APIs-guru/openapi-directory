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
var DriveCommentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsCreatePathParams, _super);
    function DriveCommentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsCreatePathParams.prototype, "fileId", void 0);
    return DriveCommentsCreatePathParams;
}(SpeakeasyBase));
export { DriveCommentsCreatePathParams };
var DriveCommentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateQueryParams, _super);
    function DriveCommentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsCreateQueryParams.prototype, "userIp", void 0);
    return DriveCommentsCreateQueryParams;
}(SpeakeasyBase));
export { DriveCommentsCreateQueryParams };
var DriveCommentsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurityOption1, _super);
    function DriveCommentsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsCreateSecurityOption1;
}(SpeakeasyBase));
export { DriveCommentsCreateSecurityOption1 };
var DriveCommentsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurityOption2, _super);
    function DriveCommentsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsCreateSecurityOption2;
}(SpeakeasyBase));
export { DriveCommentsCreateSecurityOption2 };
var DriveCommentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateSecurity, _super);
    function DriveCommentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsCreateSecurityOption1)
    ], DriveCommentsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsCreateSecurityOption2)
    ], DriveCommentsCreateSecurity.prototype, "option2", void 0);
    return DriveCommentsCreateSecurity;
}(SpeakeasyBase));
export { DriveCommentsCreateSecurity };
var DriveCommentsCreateRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateRequest, _super);
    function DriveCommentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsCreatePathParams)
    ], DriveCommentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsCreateQueryParams)
    ], DriveCommentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsCreateSecurity)
    ], DriveCommentsCreateRequest.prototype, "security", void 0);
    return DriveCommentsCreateRequest;
}(SpeakeasyBase));
export { DriveCommentsCreateRequest };
var DriveCommentsCreateResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsCreateResponse, _super);
    function DriveCommentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsCreateResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveCommentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveCommentsCreateResponse.prototype, "statusCode", void 0);
    return DriveCommentsCreateResponse;
}(SpeakeasyBase));
export { DriveCommentsCreateResponse };
