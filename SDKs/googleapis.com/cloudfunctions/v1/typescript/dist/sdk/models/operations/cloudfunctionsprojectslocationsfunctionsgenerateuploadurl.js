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
var CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams.prototype, "parent", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams };
var CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams };
var CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity };
var CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlPathParams)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateUploadUrlRequest)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlSecurity)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlRequest };
var CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateUploadUrlResponse)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse.prototype, "generateUploadUrlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsGenerateUploadUrlResponse };
