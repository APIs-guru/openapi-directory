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
var DriveCommentsUpdatePathParams = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdatePathParams, _super);
    function DriveCommentsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdatePathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdatePathParams.prototype, "fileId", void 0);
    return DriveCommentsUpdatePathParams;
}(SpeakeasyBase));
export { DriveCommentsUpdatePathParams };
var DriveCommentsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateQueryParams, _super);
    function DriveCommentsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveCommentsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveCommentsUpdateQueryParams.prototype, "userIp", void 0);
    return DriveCommentsUpdateQueryParams;
}(SpeakeasyBase));
export { DriveCommentsUpdateQueryParams };
var DriveCommentsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateSecurityOption1, _super);
    function DriveCommentsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DriveCommentsUpdateSecurityOption1;
}(SpeakeasyBase));
export { DriveCommentsUpdateSecurityOption1 };
var DriveCommentsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateSecurityOption2, _super);
    function DriveCommentsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveCommentsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveCommentsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DriveCommentsUpdateSecurityOption2;
}(SpeakeasyBase));
export { DriveCommentsUpdateSecurityOption2 };
var DriveCommentsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateSecurity, _super);
    function DriveCommentsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsUpdateSecurityOption1)
    ], DriveCommentsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveCommentsUpdateSecurityOption2)
    ], DriveCommentsUpdateSecurity.prototype, "option2", void 0);
    return DriveCommentsUpdateSecurity;
}(SpeakeasyBase));
export { DriveCommentsUpdateSecurity };
var DriveCommentsUpdateRequest = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateRequest, _super);
    function DriveCommentsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsUpdatePathParams)
    ], DriveCommentsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsUpdateQueryParams)
    ], DriveCommentsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveCommentsUpdateSecurity)
    ], DriveCommentsUpdateRequest.prototype, "security", void 0);
    return DriveCommentsUpdateRequest;
}(SpeakeasyBase));
export { DriveCommentsUpdateRequest };
var DriveCommentsUpdateResponse = /** @class */ (function (_super) {
    __extends(DriveCommentsUpdateResponse, _super);
    function DriveCommentsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], DriveCommentsUpdateResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveCommentsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveCommentsUpdateResponse.prototype, "statusCode", void 0);
    return DriveCommentsUpdateResponse;
}(SpeakeasyBase));
export { DriveCommentsUpdateResponse };
