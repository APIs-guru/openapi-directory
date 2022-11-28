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
var CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams.prototype, "parent", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams.prototype, "uploadProtocol", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams };
var CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity.prototype, "oauth2c", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity };
var CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsListPathParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsListQueryParams)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CertificatemanagerProjectsLocationsDnsAuthorizationsListSecurity)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest.prototype, "security", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsListRequest };
var CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse = /** @class */ (function (_super) {
    __extends(CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse, _super);
    function CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDnsAuthorizationsResponse)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse.prototype, "listDnsAuthorizationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse.prototype, "statusCode", void 0);
    return CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse;
}(SpeakeasyBase));
export { CertificatemanagerProjectsLocationsDnsAuthorizationsListResponse };
