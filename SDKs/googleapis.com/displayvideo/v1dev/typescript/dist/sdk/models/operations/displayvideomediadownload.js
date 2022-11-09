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
var DisplayvideoMediaDownloadPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadPathParams, _super);
    function DisplayvideoMediaDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resourceName" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadPathParams.prototype, "resourceName", void 0);
    return DisplayvideoMediaDownloadPathParams;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadPathParams };
var DisplayvideoMediaDownloadQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadQueryParams, _super);
    function DisplayvideoMediaDownloadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoMediaDownloadQueryParams;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadQueryParams };
var DisplayvideoMediaDownloadSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadSecurityOption1, _super);
    function DisplayvideoMediaDownloadSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoMediaDownloadSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoMediaDownloadSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoMediaDownloadSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadSecurityOption1 };
var DisplayvideoMediaDownloadSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadSecurityOption2, _super);
    function DisplayvideoMediaDownloadSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoMediaDownloadSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoMediaDownloadSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoMediaDownloadSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadSecurityOption2 };
var DisplayvideoMediaDownloadSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadSecurity, _super);
    function DisplayvideoMediaDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoMediaDownloadSecurityOption1)
    ], DisplayvideoMediaDownloadSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoMediaDownloadSecurityOption2)
    ], DisplayvideoMediaDownloadSecurity.prototype, "option2", void 0);
    return DisplayvideoMediaDownloadSecurity;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadSecurity };
var DisplayvideoMediaDownloadRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadRequest, _super);
    function DisplayvideoMediaDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaDownloadPathParams)
    ], DisplayvideoMediaDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaDownloadQueryParams)
    ], DisplayvideoMediaDownloadRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DisplayvideoMediaDownloadSecurity)
    ], DisplayvideoMediaDownloadRequest.prototype, "security", void 0);
    return DisplayvideoMediaDownloadRequest;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadRequest };
var DisplayvideoMediaDownloadResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoMediaDownloadResponse, _super);
    function DisplayvideoMediaDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisplayvideoMediaDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleBytestreamMedia)
    ], DisplayvideoMediaDownloadResponse.prototype, "googleBytestreamMedia", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisplayvideoMediaDownloadResponse.prototype, "statusCode", void 0);
    return DisplayvideoMediaDownloadResponse;
}(SpeakeasyBase));
export { DisplayvideoMediaDownloadResponse };
