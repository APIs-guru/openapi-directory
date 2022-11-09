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
var FactchecktoolsPagesListQueryParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesListQueryParams, _super);
    function FactchecktoolsPagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], FactchecktoolsPagesListQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=organization" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "organization", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FactchecktoolsPagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FactchecktoolsPagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListQueryParams.prototype, "url", void 0);
    return FactchecktoolsPagesListQueryParams;
}(SpeakeasyBase));
export { FactchecktoolsPagesListQueryParams };
var FactchecktoolsPagesListSecurity = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesListSecurity, _super);
    function FactchecktoolsPagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FactchecktoolsPagesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FactchecktoolsPagesListSecurity.prototype, "oauth2c", void 0);
    return FactchecktoolsPagesListSecurity;
}(SpeakeasyBase));
export { FactchecktoolsPagesListSecurity };
var FactchecktoolsPagesListRequest = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesListRequest, _super);
    function FactchecktoolsPagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsPagesListQueryParams)
    ], FactchecktoolsPagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsPagesListSecurity)
    ], FactchecktoolsPagesListRequest.prototype, "security", void 0);
    return FactchecktoolsPagesListRequest;
}(SpeakeasyBase));
export { FactchecktoolsPagesListRequest };
var FactchecktoolsPagesListResponse = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesListResponse, _super);
    function FactchecktoolsPagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FactchecktoolsPagesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse)
    ], FactchecktoolsPagesListResponse.prototype, "googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FactchecktoolsPagesListResponse.prototype, "statusCode", void 0);
    return FactchecktoolsPagesListResponse;
}(SpeakeasyBase));
export { FactchecktoolsPagesListResponse };
