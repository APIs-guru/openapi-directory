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
var DriveRepliesDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveRepliesDeletePathParams, _super);
    function DriveRepliesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveRepliesDeletePathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRepliesDeletePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replyId" }),
        __metadata("design:type", String)
    ], DriveRepliesDeletePathParams.prototype, "replyId", void 0);
    return DriveRepliesDeletePathParams;
}(SpeakeasyBase));
export { DriveRepliesDeletePathParams };
var DriveRepliesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteQueryParams, _super);
    function DriveRepliesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRepliesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRepliesDeleteQueryParams.prototype, "userIp", void 0);
    return DriveRepliesDeleteQueryParams;
}(SpeakeasyBase));
export { DriveRepliesDeleteQueryParams };
var DriveRepliesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteSecurityOption1, _super);
    function DriveRepliesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRepliesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DriveRepliesDeleteSecurityOption1 };
var DriveRepliesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteSecurityOption2, _super);
    function DriveRepliesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRepliesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRepliesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRepliesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DriveRepliesDeleteSecurityOption2 };
var DriveRepliesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteSecurity, _super);
    function DriveRepliesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesDeleteSecurityOption1)
    ], DriveRepliesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRepliesDeleteSecurityOption2)
    ], DriveRepliesDeleteSecurity.prototype, "option2", void 0);
    return DriveRepliesDeleteSecurity;
}(SpeakeasyBase));
export { DriveRepliesDeleteSecurity };
var DriveRepliesDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteRequest, _super);
    function DriveRepliesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesDeletePathParams)
    ], DriveRepliesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesDeleteQueryParams)
    ], DriveRepliesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRepliesDeleteSecurity)
    ], DriveRepliesDeleteRequest.prototype, "security", void 0);
    return DriveRepliesDeleteRequest;
}(SpeakeasyBase));
export { DriveRepliesDeleteRequest };
var DriveRepliesDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveRepliesDeleteResponse, _super);
    function DriveRepliesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRepliesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRepliesDeleteResponse.prototype, "statusCode", void 0);
    return DriveRepliesDeleteResponse;
}(SpeakeasyBase));
export { DriveRepliesDeleteResponse };
