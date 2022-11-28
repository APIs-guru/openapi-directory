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
var PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams.prototype, "name", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams };
var PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams };
var PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity };
var PrivatecaProjectsLocationsCertificateTemplatesPatchRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesPatchRequest, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesPatchPathParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesPatchQueryParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateTemplateInput)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesPatchRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesPatchRequest };
var PrivatecaProjectsLocationsCertificateTemplatesPatchResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesPatchResponse, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesPatchResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesPatchResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesPatchResponse };
