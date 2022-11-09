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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var DisplayvideoMediaUploadPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadPathParams, _super);
    function DisplayvideoMediaUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadPathParams.prototype, "resourceName", void 0);
    return DisplayvideoMediaUploadPathParams;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadPathParams };
var DisplayvideoMediaUploadQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadQueryParams, _super);
    function DisplayvideoMediaUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoMediaUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoMediaUploadQueryParams;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadQueryParams };
var DisplayvideoMediaUploadSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadSecurityOption1, _super);
    function DisplayvideoMediaUploadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoMediaUploadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoMediaUploadSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoMediaUploadSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadSecurityOption1 };
var DisplayvideoMediaUploadSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadSecurityOption2, _super);
    function DisplayvideoMediaUploadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoMediaUploadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoMediaUploadSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoMediaUploadSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadSecurityOption2 };
var DisplayvideoMediaUploadSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadSecurity, _super);
    function DisplayvideoMediaUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoMediaUploadSecurityOption1)
    ], DisplayvideoMediaUploadSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoMediaUploadSecurityOption2)
    ], DisplayvideoMediaUploadSecurity.prototype, "option2", void 0);
    return DisplayvideoMediaUploadSecurity;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadSecurity };
var DisplayvideoMediaUploadRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadRequest, _super);
    function DisplayvideoMediaUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaUploadPathParams)
    ], DisplayvideoMediaUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaUploadQueryParams)
    ], DisplayvideoMediaUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], DisplayvideoMediaUploadRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaUploadSecurity)
    ], DisplayvideoMediaUploadRequest.prototype, "security", void 0);
    return DisplayvideoMediaUploadRequest;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadRequest };
var DisplayvideoMediaUploadResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaUploadResponse, _super);
    function DisplayvideoMediaUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisplayvideoMediaUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleBytestreamMedia)
    ], DisplayvideoMediaUploadResponse.prototype, "googleBytestreamMedia", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisplayvideoMediaUploadResponse.prototype, "statusCode", void 0);
    return DisplayvideoMediaUploadResponse;
}(SpeakeasyBase));
export { DisplayvideoMediaUploadResponse };
