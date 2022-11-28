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
var PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams };
var PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certificateTemplateId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "certificateTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams };
var PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity };
var PrivatecaProjectsLocationsCertificateTemplatesCreateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesCreateRequest, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesCreatePathParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesCreateQueryParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateTemplateInput)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesCreateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesCreateRequest };
var PrivatecaProjectsLocationsCertificateTemplatesCreateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesCreateResponse, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesCreateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesCreateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesCreateResponse };
