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
var DriveRepliesPatchPathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchPathParams, _super);
    function DriveRepliesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchPathParams.prototype, "replyId", void 0);
    return DriveRepliesPatchPathParams;
}(SpeakeasyBase));
export { DriveRepliesPatchPathParams };
var DriveRepliesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchQueryParams, _super);
    function DriveRepliesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesPatchQueryParams.prototype, "userIp", void 0);
    return DriveRepliesPatchQueryParams;
}(SpeakeasyBase));
export { DriveRepliesPatchQueryParams };
var DriveRepliesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchSecurityOption1, _super);
    function DriveRepliesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesPatchSecurityOption1;
}(SpeakeasyBase));
export { DriveRepliesPatchSecurityOption1 };
var DriveRepliesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchSecurityOption2, _super);
    function DriveRepliesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesPatchSecurityOption2;
}(SpeakeasyBase));
export { DriveRepliesPatchSecurityOption2 };
var DriveRepliesPatchSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchSecurity, _super);
    function DriveRepliesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesPatchSecurityOption1)
    ], DriveRepliesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesPatchSecurityOption2)
    ], DriveRepliesPatchSecurity.prototype, "option2", void 0);
    return DriveRepliesPatchSecurity;
}(SpeakeasyBase));
export { DriveRepliesPatchSecurity };
var DriveRepliesPatchRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchRequest, _super);
    function DriveRepliesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesPatchPathParams)
    ], DriveRepliesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesPatchQueryParams)
    ], DriveRepliesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesPatchSecurity)
    ], DriveRepliesPatchRequest.prototype, "security", void 0);
    return DriveRepliesPatchRequest;
}(SpeakeasyBase));
export { DriveRepliesPatchRequest };
var DriveRepliesPatchResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesPatchResponse, _super);
    function DriveRepliesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesPatchResponse.prototype, "commentReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRepliesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRepliesPatchResponse.prototype, "statusCode", void 0);
    return DriveRepliesPatchResponse;
}(SpeakeasyBase));
export { DriveRepliesPatchResponse };
