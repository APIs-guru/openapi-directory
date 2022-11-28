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
var DriveRevisionsDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeletePathParams, _super);
    function DriveRevisionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeletePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeletePathParams.prototype, "revisionId", void 0);
    return DriveRevisionsDeletePathParams;
}(SpeakeasyBase));
export { DriveRevisionsDeletePathParams };
var DriveRevisionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteQueryParams, _super);
    function DriveRevisionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteQueryParams.prototype, "userIp", void 0);
    return DriveRevisionsDeleteQueryParams;
}(SpeakeasyBase));
export { DriveRevisionsDeleteQueryParams };
var DriveRevisionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteSecurityOption1, _super);
    function DriveRevisionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRevisionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DriveRevisionsDeleteSecurityOption1 };
var DriveRevisionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteSecurityOption2, _super);
    function DriveRevisionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRevisionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DriveRevisionsDeleteSecurityOption2 };
var DriveRevisionsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteSecurityOption3, _super);
    function DriveRevisionsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRevisionsDeleteSecurityOption3;
}(SpeakeasyBase));
export { DriveRevisionsDeleteSecurityOption3 };
var DriveRevisionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteSecurity, _super);
    function DriveRevisionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsDeleteSecurityOption1)
    ], DriveRevisionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsDeleteSecurityOption2)
    ], DriveRevisionsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsDeleteSecurityOption3)
    ], DriveRevisionsDeleteSecurity.prototype, "option3", void 0);
    return DriveRevisionsDeleteSecurity;
}(SpeakeasyBase));
export { DriveRevisionsDeleteSecurity };
var DriveRevisionsDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteRequest, _super);
    function DriveRevisionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsDeletePathParams)
    ], DriveRevisionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsDeleteQueryParams)
    ], DriveRevisionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsDeleteSecurity)
    ], DriveRevisionsDeleteRequest.prototype, "security", void 0);
    return DriveRevisionsDeleteRequest;
}(SpeakeasyBase));
export { DriveRevisionsDeleteRequest };
var DriveRevisionsDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveRevisionsDeleteResponse, _super);
    function DriveRevisionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRevisionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRevisionsDeleteResponse.prototype, "statusCode", void 0);
    return DriveRevisionsDeleteResponse;
}(SpeakeasyBase));
export { DriveRevisionsDeleteResponse };
