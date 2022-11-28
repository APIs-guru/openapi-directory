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
var DriveRepliesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdatePathParams, _super);
    function DriveRepliesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdatePathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdatePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdatePathParams.prototype, "replyId", void 0);
    return DriveRepliesUpdatePathParams;
}(SpeakeasyBase));
export { DriveRepliesUpdatePathParams };
var DriveRepliesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateQueryParams, _super);
    function DriveRepliesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesUpdateQueryParams.prototype, "userIp", void 0);
    return DriveRepliesUpdateQueryParams;
}(SpeakeasyBase));
export { DriveRepliesUpdateQueryParams };
var DriveRepliesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateSecurityOption1, _super);
    function DriveRepliesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DriveRepliesUpdateSecurityOption1 };
var DriveRepliesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateSecurityOption2, _super);
    function DriveRepliesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DriveRepliesUpdateSecurityOption2 };
var DriveRepliesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateSecurity, _super);
    function DriveRepliesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesUpdateSecurityOption1)
    ], DriveRepliesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesUpdateSecurityOption2)
    ], DriveRepliesUpdateSecurity.prototype, "option2", void 0);
    return DriveRepliesUpdateSecurity;
}(SpeakeasyBase));
export { DriveRepliesUpdateSecurity };
var DriveRepliesUpdateRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateRequest, _super);
    function DriveRepliesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesUpdatePathParams)
    ], DriveRepliesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesUpdateQueryParams)
    ], DriveRepliesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesUpdateSecurity)
    ], DriveRepliesUpdateRequest.prototype, "security", void 0);
    return DriveRepliesUpdateRequest;
}(SpeakeasyBase));
export { DriveRepliesUpdateRequest };
var DriveRepliesUpdateResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesUpdateResponse, _super);
    function DriveRepliesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentReply)
    ], DriveRepliesUpdateResponse.prototype, "commentReply", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRepliesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRepliesUpdateResponse.prototype, "statusCode", void 0);
    return DriveRepliesUpdateResponse;
}(SpeakeasyBase));
export { DriveRepliesUpdateResponse };
