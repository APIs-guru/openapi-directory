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
var DriveCommentsPatchPathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchPathParams, _super);
    function DriveCommentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchPathParams.prototype, "fileId", void 0);
    return DriveCommentsPatchPathParams;
}(SpeakeasyBase));
export { DriveCommentsPatchPathParams };
var DriveCommentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchQueryParams, _super);
    function DriveCommentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsPatchQueryParams.prototype, "userIp", void 0);
    return DriveCommentsPatchQueryParams;
}(SpeakeasyBase));
export { DriveCommentsPatchQueryParams };
var DriveCommentsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchSecurityOption1, _super);
    function DriveCommentsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsPatchSecurityOption1;
}(SpeakeasyBase));
export { DriveCommentsPatchSecurityOption1 };
var DriveCommentsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchSecurityOption2, _super);
    function DriveCommentsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsPatchSecurityOption2;
}(SpeakeasyBase));
export { DriveCommentsPatchSecurityOption2 };
var DriveCommentsPatchSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchSecurity, _super);
    function DriveCommentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsPatchSecurityOption1)
    ], DriveCommentsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsPatchSecurityOption2)
    ], DriveCommentsPatchSecurity.prototype, "option2", void 0);
    return DriveCommentsPatchSecurity;
}(SpeakeasyBase));
export { DriveCommentsPatchSecurity };
var DriveCommentsPatchRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchRequest, _super);
    function DriveCommentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsPatchPathParams)
    ], DriveCommentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsPatchQueryParams)
    ], DriveCommentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsPatchSecurity)
    ], DriveCommentsPatchRequest.prototype, "security", void 0);
    return DriveCommentsPatchRequest;
}(SpeakeasyBase));
export { DriveCommentsPatchRequest };
var DriveCommentsPatchResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsPatchResponse, _super);
    function DriveCommentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsPatchResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveCommentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveCommentsPatchResponse.prototype, "statusCode", void 0);
    return DriveCommentsPatchResponse;
}(SpeakeasyBase));
export { DriveCommentsPatchResponse };
