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
var DriveRevisionsPatchPathParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchPathParams, _super);
    function DriveRevisionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchPathParams.prototype, "revisionId", void 0);
    return DriveRevisionsPatchPathParams;
}(SpeakeasyBase));
export { DriveRevisionsPatchPathParams };
var DriveRevisionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchQueryParams, _super);
    function DriveRevisionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRevisionsPatchQueryParams.prototype, "userIp", void 0);
    return DriveRevisionsPatchQueryParams;
}(SpeakeasyBase));
export { DriveRevisionsPatchQueryParams };
var DriveRevisionsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchSecurityOption1, _super);
    function DriveRevisionsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRevisionsPatchSecurityOption1;
}(SpeakeasyBase));
export { DriveRevisionsPatchSecurityOption1 };
var DriveRevisionsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchSecurityOption2, _super);
    function DriveRevisionsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRevisionsPatchSecurityOption2;
}(SpeakeasyBase));
export { DriveRevisionsPatchSecurityOption2 };
var DriveRevisionsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchSecurityOption3, _super);
    function DriveRevisionsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRevisionsPatchSecurityOption3;
}(SpeakeasyBase));
export { DriveRevisionsPatchSecurityOption3 };
var DriveRevisionsPatchSecurity = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchSecurity, _super);
    function DriveRevisionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsPatchSecurityOption1)
    ], DriveRevisionsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsPatchSecurityOption2)
    ], DriveRevisionsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsPatchSecurityOption3)
    ], DriveRevisionsPatchSecurity.prototype, "option3", void 0);
    return DriveRevisionsPatchSecurity;
}(SpeakeasyBase));
export { DriveRevisionsPatchSecurity };
var DriveRevisionsPatchRequest = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchRequest, _super);
    function DriveRevisionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsPatchPathParams)
    ], DriveRevisionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsPatchQueryParams)
    ], DriveRevisionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Revision)
    ], DriveRevisionsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsPatchSecurity)
    ], DriveRevisionsPatchRequest.prototype, "security", void 0);
    return DriveRevisionsPatchRequest;
}(SpeakeasyBase));
export { DriveRevisionsPatchRequest };
var DriveRevisionsPatchResponse = /** @class */ (function (_super) {
    __extends(DriveRevisionsPatchResponse, _super);
    function DriveRevisionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRevisionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Revision)
    ], DriveRevisionsPatchResponse.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRevisionsPatchResponse.prototype, "statusCode", void 0);
    return DriveRevisionsPatchResponse;
}(SpeakeasyBase));
export { DriveRevisionsPatchResponse };
