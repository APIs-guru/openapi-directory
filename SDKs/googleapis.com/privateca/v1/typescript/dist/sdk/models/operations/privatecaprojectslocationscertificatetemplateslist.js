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
var PrivatecaProjectsLocationsCertificateTemplatesListPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesListPathParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListPathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesListPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesListPathParams };
var PrivatecaProjectsLocationsCertificateTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesListQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesListQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesListQueryParams };
var PrivatecaProjectsLocationsCertificateTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesListSecurity, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateTemplatesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateTemplatesListSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesListSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesListSecurity };
var PrivatecaProjectsLocationsCertificateTemplatesListRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesListRequest, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesListPathParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesListQueryParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesListSecurity)
    ], PrivatecaProjectsLocationsCertificateTemplatesListRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesListRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesListRequest };
var PrivatecaProjectsLocationsCertificateTemplatesListResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesListResponse, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCertificateTemplatesResponse)
    ], PrivatecaProjectsLocationsCertificateTemplatesListResponse.prototype, "listCertificateTemplatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesListResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesListResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesListResponse };
