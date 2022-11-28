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
var DriveRepliesCreatePathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesCreatePathParams, _super);
    function DriveRepliesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesCreatePathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesCreatePathParams.prototype, "fileId", void 0);
    return DriveRepliesCreatePathParams;
}(SpeakeasyBase));
export { DriveRepliesCreatePathParams };
var DriveRepliesCreateQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateQueryParams, _super);
    function DriveRepliesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesCreateQueryParams.prototype, "userIp", void 0);
    return DriveRepliesCreateQueryParams;
}(SpeakeasyBase));
export { DriveRepliesCreateQueryParams };
var DriveRepliesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateSecurityOption1, _super);
    function DriveRepliesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesCreateSecurityOption1;
}(SpeakeasyBase));
export { DriveRepliesCreateSecurityOption1 };
var DriveRepliesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateSecurityOption2, _super);
    function DriveRepliesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesCreateSecurityOption2;
}(SpeakeasyBase));
export { DriveRepliesCreateSecurityOption2 };
var DriveRepliesCreateSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateSecurity, _super);
    function DriveRepliesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesCreateSecurityOption1)
    ], DriveRepliesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesCreateSecurityOption2)
    ], DriveRepliesCreateSecurity.prototype, "option2", void 0);
    return DriveRepliesCreateSecurity;
}(SpeakeasyBase));
export { DriveRepliesCreateSecurity };
var DriveRepliesCreateRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateRequest, _super);
    function DriveRepliesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesCreatePathParams)
    ], DriveRepliesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesCreateQueryParams)
    ], DriveRepliesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Reply)
    ], DriveRepliesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesCreateSecurity)
    ], DriveRepliesCreateRequest.prototype, "security", void 0);
    return DriveRepliesCreateRequest;
}(SpeakeasyBase));
export { DriveRepliesCreateRequest };
var DriveRepliesCreateResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesCreateResponse, _super);
    function DriveRepliesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRepliesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Reply)
    ], DriveRepliesCreateResponse.prototype, "reply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRepliesCreateResponse.prototype, "statusCode", void 0);
    return DriveRepliesCreateResponse;
}(SpeakeasyBase));
export { DriveRepliesCreateResponse };
