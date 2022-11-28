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
var CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams, _super);
    function CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams.prototype, "parent", void 0);
    return CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams };
var CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams, _super);
    function CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=certificateMapId" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "certificateMapId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams };
var CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity, _super);
    function CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity };
var CertificatemanagerProjectsLocationsCertificateMapsCreateRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateMapsCreateRequest, _super);
    function CertificatemanagerProjectsLocationsCertificateMapsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateMapsCreatePathParams)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateMapsCreateQueryParams)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CertificateMapInput)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsCertificateMapsCreateSecurity)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsCertificateMapsCreateRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateMapsCreateRequest };
var CertificatemanagerProjectsLocationsCertificateMapsCreateResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsCertificateMapsCreateResponse, _super);
    function CertificatemanagerProjectsLocationsCertificateMapsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsCertificateMapsCreateResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsCertificateMapsCreateResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsCertificateMapsCreateResponse };
