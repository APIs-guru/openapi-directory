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
var DriveCommentsListPathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsListPathParams, _super);
    function DriveCommentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsListPathParams.prototype, "fileId", void 0);
    return DriveCommentsListPathParams;
}(SpeakeasyBase));
export { DriveCommentsListPathParams };
var DriveCommentsListQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsListQueryParams, _super);
    function DriveCommentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsListQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DriveCommentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startModifiedTime" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "startModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsListQueryParams.prototype, "userIp", void 0);
    return DriveCommentsListQueryParams;
}(SpeakeasyBase));
export { DriveCommentsListQueryParams };
var DriveCommentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsListSecurityOption1, _super);
    function DriveCommentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsListSecurityOption1;
}(SpeakeasyBase));
export { DriveCommentsListSecurityOption1 };
var DriveCommentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsListSecurityOption2, _super);
    function DriveCommentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsListSecurityOption2;
}(SpeakeasyBase));
export { DriveCommentsListSecurityOption2 };
var DriveCommentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveCommentsListSecurityOption3, _super);
    function DriveCommentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveCommentsListSecurityOption3;
}(SpeakeasyBase));
export { DriveCommentsListSecurityOption3 };
var DriveCommentsListSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsListSecurity, _super);
    function DriveCommentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsListSecurityOption1)
    ], DriveCommentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsListSecurityOption2)
    ], DriveCommentsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsListSecurityOption3)
    ], DriveCommentsListSecurity.prototype, "option3", void 0);
    return DriveCommentsListSecurity;
}(SpeakeasyBase));
export { DriveCommentsListSecurity };
var DriveCommentsListRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsListRequest, _super);
    function DriveCommentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsListPathParams)
    ], DriveCommentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsListQueryParams)
    ], DriveCommentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsListSecurity)
    ], DriveCommentsListRequest.prototype, "security", void 0);
    return DriveCommentsListRequest;
}(SpeakeasyBase));
export { DriveCommentsListRequest };
var DriveCommentsListResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsListResponse, _super);
    function DriveCommentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentList)
    ], DriveCommentsListResponse.prototype, "commentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveCommentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveCommentsListResponse.prototype, "statusCode", void 0);
    return DriveCommentsListResponse;
}(SpeakeasyBase));
export { DriveCommentsListResponse };
