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
var DriveRepliesInsertPathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertPathParams, _super);
    function DriveRepliesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertPathParams.prototype, "fileId", void 0);
    return DriveRepliesInsertPathParams;
}(SpeakeasyBase));
export { DriveRepliesInsertPathParams };
var DriveRepliesInsertQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertQueryParams, _super);
    function DriveRepliesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesInsertQueryParams.prototype, "userIp", void 0);
    return DriveRepliesInsertQueryParams;
}(SpeakeasyBase));
export { DriveRepliesInsertQueryParams };
var DriveRepliesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertSecurityOption1, _super);
    function DriveRepliesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesInsertSecurityOption1;
}(SpeakeasyBase));
export { DriveRepliesInsertSecurityOption1 };
var DriveRepliesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertSecurityOption2, _super);
    function DriveRepliesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesInsertSecurityOption2;
}(SpeakeasyBase));
export { DriveRepliesInsertSecurityOption2 };
var DriveRepliesInsertSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertSecurity, _super);
    function DriveRepliesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesInsertSecurityOption1)
    ], DriveRepliesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesInsertSecurityOption2)
    ], DriveRepliesInsertSecurity.prototype, "option2", void 0);
    return DriveRepliesInsertSecurity;
}(SpeakeasyBase));
export { DriveRepliesInsertSecurity };
var DriveRepliesInsertRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertRequest, _super);
    function DriveRepliesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesInsertPathParams)
    ], DriveRepliesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesInsertQueryParams)
    ], DriveRepliesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesInsertSecurity)
    ], DriveRepliesInsertRequest.prototype, "security", void 0);
    return DriveRepliesInsertRequest;
}(SpeakeasyBase));
export { DriveRepliesInsertRequest };
var DriveRepliesInsertResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesInsertResponse, _super);
    function DriveRepliesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesInsertResponse.prototype, "commentReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRepliesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRepliesInsertResponse.prototype, "statusCode", void 0);
    return DriveRepliesInsertResponse;
}(SpeakeasyBase));
export { DriveRepliesInsertResponse };
