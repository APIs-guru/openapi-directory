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
var FactchecktoolsClaimsSearchQueryParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsClaimsSearchQueryParams, _super);
    function FactchecktoolsClaimsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "languageCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxAgeDays" }),
        __metadata("design:type", Number)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "maxAgeDays", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=reviewPublisherSiteFilter" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "reviewPublisherSiteFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return FactchecktoolsClaimsSearchQueryParams;
}(SpeakeasyBase));
export { FactchecktoolsClaimsSearchQueryParams };
var FactchecktoolsClaimsSearchRequest = /** @class */ (function (_super) {
    __extends(FactchecktoolsClaimsSearchRequest, _super);
    function FactchecktoolsClaimsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsClaimsSearchQueryParams)
    ], FactchecktoolsClaimsSearchRequest.prototype, "queryParams", void 0);
    return FactchecktoolsClaimsSearchRequest;
}(SpeakeasyBase));
export { FactchecktoolsClaimsSearchRequest };
var FactchecktoolsClaimsSearchResponse = /** @class */ (function (_super) {
    __extends(FactchecktoolsClaimsSearchResponse, _super);
    function FactchecktoolsClaimsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FactchecktoolsClaimsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse)
    ], FactchecktoolsClaimsSearchResponse.prototype, "googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FactchecktoolsClaimsSearchResponse.prototype, "statusCode", void 0);
    return FactchecktoolsClaimsSearchResponse;
}(SpeakeasyBase));
export { FactchecktoolsClaimsSearchResponse };
